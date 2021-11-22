import React, { useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import transliterate from '../transliterate';
import { isUkInput, isRuInput } from '../helpers/transliteration';

const FormBlock = (): JSX.Element => {
    const [textToTransliterate, setTextToTransliterate] = useState('');
    const [inputType, setInputType] = useState('uk');
    const [outputType, setOutputType] = useState('en');
    const [output, setOutput] = useState('');

    const intl = useIntl();

    useEffect(() => {
        setOutput(transliterate(textToTransliterate, inputType, outputType));
    }, [textToTransliterate, inputType, outputType]);

    useEffect(() => {
        isRuInput(textToTransliterate) && setInputType('ru');
        isUkInput(textToTransliterate) && setInputType('uk');
    }, [textToTransliterate]);

    const handleTextChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const target = event.target as HTMLTextAreaElement;
        setTextToTransliterate(target.value);
    };

    const handleInputTypeChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const target = event.target as HTMLSelectElement;
        setInputType(target.value);
    };

    const handleOutputTypeChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const target = event.target as HTMLSelectElement;
        setOutputType(target.value);
    };

    return (
        <>
            <form>
                <p>
                    <label htmlFor='inputType'>
                        <FormattedMessage id='inputLanguageLbl' />:
                    </label>
                    &nbsp;
                    <select
                        id='inputType'
                        value={inputType}
                        onChange={handleInputTypeChange}
                    >
                        <FormattedMessage id='inputLanguageOptUk'>
                            {message => <option value='uk'>{message}</option>}
                        </FormattedMessage>
                        <FormattedMessage id='inputLanguageOptRu'>
                            {message => <option value='ru'>{message}</option>}
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
                        onChange={handleOutputTypeChange}
                        disabled={inputType === 'ru'}
                    >
                        <FormattedMessage id='outputLanguageOptEn'>
                            {message => <option value='en'>{message}</option>}
                        </FormattedMessage>
                        {inputType === 'uk' && (
                            <>
                                <FormattedMessage id='outputLanguageOptCz'>
                                    {message => (
                                        <option value='cz'>{message}</option>
                                    )}
                                </FormattedMessage>
                                <FormattedMessage id='outputLanguageOptPl'>
                                    {message => (
                                        <option value='pl' disabled>
                                            {message}
                                        </option>
                                    )}
                                </FormattedMessage>
                            </>
                        )}
                    </select>
                </p>
                <textarea
                    onChange={handleTextChange}
                    value={textToTransliterate}
                    placeholder={intl.formatMessage({
                        id: 'inputLanguagePlaceholder',
                    })}
                />
            </form>
            <pre>{output}</pre>
        </>
    );
};

export default FormBlock;
