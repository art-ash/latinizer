import React, { useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import transliterate from '../transliterate';
import { isUkInput, isRuInput } from '../helper';

export const Main: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [inputType, setInputType] = useState('uk');
    const [outputType, setOutputType] = useState('en');
    const [outputText, setOutputText] = useState('');
    const intl = useIntl();

    useEffect(() => {
        setOutputText(transliterate(inputText, inputType, outputType));
    }, [inputText, inputType, outputType]);

    useEffect(() => {
        isRuInput(inputText) && setInputType('ru');
        isUkInput(inputText) && setInputType('uk');
    }, [inputText]);

    const handleInputTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setInputText(event.target.value);
    const handleOutputTypeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setOutputType(event.target.value);
    const handleInputTypeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setInputType(event.target.value);

    return (
        <main>
            <form className='mb-4'>
                <p className='mb-2'>
                    <label htmlFor='inputType' className='me-2'>
                        <FormattedMessage id='inputLanguageLbl' />:
                    </label>
                    <select
                        id='inputType'
                        value={inputType}
                        onChange={handleInputTypeChange}>
                        <FormattedMessage id='inputLanguageOptUk'>
                            {(message) => <option value='uk'>{message}</option>}
                        </FormattedMessage>
                        <FormattedMessage id='inputLanguageOptRu'>
                            {(message) => <option value='ru'>{message}</option>}
                        </FormattedMessage>
                    </select>
                </p>
                <p className='mb-4'>
                    <label htmlFor='outputType' className='me-2'>
                        <FormattedMessage id='outputLanguageLbl' />:{' '}
                    </label>
                    <select
                        id='outputType'
                        value={outputType}
                        onChange={handleOutputTypeChange}
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
                                        <option value='pl'>
                                            {message}
                                        </option>
                                    )}
                                </FormattedMessage>
                            </>
                        )}
                    </select>
                </p>
                <textarea
                    className='d-block w-100'
                    id='inputLanguageTextarea'
                    onChange={handleInputTextChange}
                    value={inputText}
                    placeholder={intl.formatMessage({
                        id: 'inputLanguagePlaceholder',
                    })}
                />
            </form>
            <pre>{outputText}</pre>
        </main>
    );
};
