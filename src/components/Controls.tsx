import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { transliterate} from '../helpers';
import { isUkInput, isRuInput } from '../helpers/transliteration';
import {
    changeInputType,
    changeOutputType,
    changeInputText,
    changeOutputText,
} from '../actions';

interface ControlsProps {
    inputType: string;
    outputType: string;
    inputText: string;
    changeInputType(lang: string): void;
    changeOutputType(lang: string): void;
    changeInputText(text: string): void;
    changeOutputText(text: string): void;
}

interface ControlsState {
    inputType: string;
    outputType: string;
    inputText: string;
}

class _Controls extends React.Component<ControlsProps> {
    componentDidUpdate(prevProps: ControlsProps): void {
        const { inputText, inputType, outputType } = this.props;

        const isInputTextChanged = prevProps.inputText !== inputText;
        const isRuInputType = isRuInput(inputText);
        const isUkInputType = isUkInput(inputText);
        const isInputTypeChanged = prevProps.inputType !== inputType;
        const isOutputTypeChanged = prevProps.outputType !== outputType;
        
        if (isInputTextChanged && isRuInputType) {
            this.props.changeInputType('ru');
        }

        if (isInputTextChanged && isUkInputType) {
            this.props.changeInputType('uk');
        }

        if (isInputTextChanged || isInputTypeChanged || isOutputTypeChanged) {
            this.props.changeOutputText(
                transliterate(inputText, inputType, outputType)
            );
        }
    }

    handleInputTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target as HTMLSelectElement;
        this.props.changeInputType(target.value);
    };

    handleOutputTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target as HTMLSelectElement;
        this.props.changeOutputType(target.value);
    };

    handleInputTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = event.target as HTMLTextAreaElement;
        this.props.changeInputText(target.value);
    };

    render(): React.ReactNode {
        const { inputType, outputType, inputText } = this.props;

        return (
            <form>
                <p>
                    <label htmlFor='inputType'>
                        <FormattedMessage id='inputLanguageLbl' />:
                    </label>
                    &nbsp;
                    <select
                        id='inputType'
                        value={inputType}
                        onChange={this.handleInputTypeChange}>
                        <FormattedMessage id='inputLanguageOptUk'>
                            {(message) => <option value='uk'>{message}</option>}
                        </FormattedMessage>
                        <FormattedMessage id='inputLanguageOptRu'>
                            {(message) => <option value='ru'>{message}</option>}
                        </FormattedMessage>
                    </select>
                </p>
                <p>
                    <label htmlFor='outputType'>
                        <FormattedMessage id='outputLanguageLbl' />:{' '}
                    </label>
                    &nbsp;
                    <select
                        id='outputType'
                        value={outputType}
                        onChange={this.handleOutputTypeChange}
                        disabled={inputType === 'ru'}>
                        <FormattedMessage id='outputLanguageOptEn'>
                            {(message) => <option value='en'>{message}</option>}
                        </FormattedMessage>
                        {inputType === 'uk' && (
                            <>
                                <FormattedMessage id='outputLanguageOptCz'>
                                    {(message) => (
                                        <option value='cz'>{message}</option>
                                    )}
                                </FormattedMessage>
                                <FormattedMessage id='outputLanguageOptPl'>
                                    {(message) => (
                                        <option value='pl' disabled>
                                            {message}
                                        </option>
                                    )}
                                </FormattedMessage>
                            </>
                        )}
                    </select>
                </p>
                <label htmlFor='inputLanguageTextarea'>
                    <FormattedMessage id='inputLanguagePlaceholder' />
                </label>
                <textarea
                    id='inputLanguageTextarea'
                    onChange={this.handleInputTextChange}
                    value={inputText}
                />
            </form>
        );
    }
}

const mapStateToProps = (state: { appReducer: ControlsState }) => {
    const { inputText, inputType, outputType } = state.appReducer;

    return {
        inputText,
        inputType,
        outputType,
    };
};

export const Controls = connect(mapStateToProps, {
    changeInputType,
    changeOutputType,
    changeInputText,
    changeOutputText,
})(_Controls);
