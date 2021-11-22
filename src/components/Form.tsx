import React, { useState, useEffect } from 'react';
import transliterate from '../transliterate';
import { isUkInput, isRuInput } from '../helper';

export const FormBlock = (): JSX.Element => {
    const [textToTransliterate, setTextToTransliterate] = useState('');
    const [inputType, setInputType] = useState('uk');
    const [outputType, setOutputType] = useState('en');
    const [output, setOutput] = useState('');

    useEffect(() => {
        setOutput(transliterate(textToTransliterate, inputType, outputType));
    }, [textToTransliterate, inputType, outputType]);

    useEffect(() => {
        isRuInput(textToTransliterate) && setInputType('ru');
        isUkInput(textToTransliterate) && setInputType('uk');
    }, [textToTransliterate]);

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = (event.target as HTMLTextAreaElement);
        setTextToTransliterate(target.value);
    };

    const handleInputTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = (event.target as HTMLSelectElement);
        setInputType(target.value);
    }

    const handleOutputTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = (event.target as HTMLSelectElement);
        setOutputType(target.value);
    }

    return (
        <>
            <form>
                <p>
                    <label htmlFor='inputType'>Input:</label>
                    &nbsp;
                    <select
                        id='inputType'
                        value={inputType}
                        onChange={handleInputTypeChange}
                    >
                        <option value='uk'>Ukrainian</option>
                        <option value='ru'>Russian</option>
                    </select>
                </p>
                <p>
                    <label htmlFor='outputType'>Output: </label>
                    &nbsp;
                    <select
                        id='outputType'
                        value={outputType}
                        onChange={handleOutputTypeChange}
                        disabled={inputType === 'ru'}
                    >
                        <option value='en'>Englify</option>
                        {inputType === 'uk' && (
                            <>
                                <option value='cz'>Czechify</option>
                                <option value='pl' disabled>
                                    Polonify
                                </option>
                            </>
                        )}
                    </select>
                </p>
                <textarea
                    onChange={handleTextChange}
                    value={textToTransliterate}
                    placeholder={'Cyrillic text here...'}
                />
            </form>
            <pre>{output}</pre>
        </>
    );
};
