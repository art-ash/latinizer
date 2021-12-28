import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import transliterate from '../transliterate';
import { isUkInput, isRuInput } from '../helper';

export const Main = () => {
    const [inputText, setInputText] = useState('');
    const [inputType, setInputType] = useState('uk');
    const [outputType, setOutputType] = useState('en');
    const [outputText, setOutputText] = useState('');

    useEffect(() => {
        setOutputText(transliterate(inputText, inputType, outputType));
    }, [inputText, inputType, outputType]);

    useEffect(() => {
        isRuInput(inputText) && setInputType('ru');
        isUkInput(inputText) && setInputType('uk');
    }, [inputText]);

    const handleInputTextChange = (event) => setInputText(event.target.value);
    const handleOutputTypeChange = (event) => setOutputType(event.target.value);
    const handleInputTypeChange = (event) => setInputType(event.target.value);

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
                                        <option value='pl' disabled>
                                            {message}
                                        </option>
                                    )}
                                </FormattedMessage>
                            </>
                        )}
                    </select>
                </p>
                <div className='mb-2'>
                    <label htmlFor='inputLanguageTextarea'>
                        <FormattedMessage id='inputLanguagePlaceholder' />
                    </label>
                </div>
                <textarea
                    className='d-block w-100'
                    id='inputLanguageTextarea'
                    onChange={handleInputTextChange}
                    value={inputText}
                />
            </form>
            <pre>{outputText}</pre>
        </main>
    );
};
