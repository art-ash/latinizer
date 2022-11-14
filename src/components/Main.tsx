import React, { useState, useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import transliterate, { InputLanguage, OutputLanguage } from "../transliterate";
import { isUkInput, isRuInput } from "../helper";
import { Language } from "../messages";

export const Main: React.FC = () => {
    const [inputText, setInputText] = useState("");
    const [inputType, setInputType] = useState<InputLanguage>("uk");
    const [outputType, setOutputType] = useState<OutputLanguage>("en");
    const [outputText, setOutputText] = useState("");
    const intl = useIntl();

    useEffect(() => {
        setOutputText(transliterate(inputText, inputType, outputType));
    }, [inputText, inputType, outputType]);

    useEffect(() => {
        isRuInput(inputText) && setInputType("ru");
        isUkInput(inputText) && setInputType("uk");
    }, [inputText]);

    const handleInputTextChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => setInputText(event.target.value);
    const handleOutputTypeChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => setOutputType(event.target.value as OutputLanguage);
    const handleInputTypeChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => setInputType(event.target.value as InputLanguage);

    return (
        <main>
            <form className="mb-4">
                <p className="mb-2">
                    <label htmlFor="inputType" className="me-2">
                        <FormattedMessage id="inputLanguageLbl" />:
                    </label>
                    <select
                        id="inputType"
                        value={inputType}
                        onChange={handleInputTypeChange}
                    >
                        {/* <FormattedMessage id='inputLanguageOptUk'>
                            {(message) => <option value='uk'>{message}</option>}
                        </FormattedMessage>
                        <FormattedMessage id='inputLanguageOptRu'>
                            {(message) => <option value='ru'>{message}</option>}
                        </FormattedMessage> */}
                        <option value="uk">
                            <FormattedMessage id="inputLanguageOptUk" />
                        </option>
                        <option value="ru">
                            <FormattedMessage id="inputLanguageOptRu" />
                        </option>
                    </select>
                </p>
                <p className="mb-4">
                    <label htmlFor="outputType" className="me-2">
                        <FormattedMessage id="outputLanguageLbl" />:{" "}
                    </label>
                    <select
                        id="outputType"
                        value={outputType}
                        onChange={handleOutputTypeChange}
                        disabled={inputType === "ru"}
                    >
                        {/* <FormattedMessage id='outputLanguageOptEn'>
                            {(message) => <option value='en'>{message}</option>}
                        </FormattedMessage> */}
                        <option value="en">
                            <FormattedMessage id="outputLanguageOptEn" />
                        </option>
                        {inputType === "uk" && (
                            <>
                                {/* <FormattedMessage id='outputLanguageOptCz'>
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
                                </FormattedMessage> */}
                                <option value="cz">
                                    <FormattedMessage id="outputLanguageOptCz" />
                                </option>
                                <option value="pl">
                                    <FormattedMessage id="outputLanguageOptPl" />
                                </option>
                            </>
                        )}
                    </select>
                </p>
                <textarea
                    className="d-block w-100"
                    id="inputLanguageTextarea"
                    onChange={(event) => setInputText(event.target.value)}
                    value={inputText}
                    placeholder={intl.formatMessage({
                        id: "inputLanguagePlaceholder",
                    })}
                />
            </form>
            <pre>{outputText}</pre>
        </main>
    );
};
