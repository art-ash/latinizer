import React, { useState, useEffect } from "react";
import transliterate from "./transliterate";
import "./style.css";

export const App = () => {
  const [textToTransliterate, setTextToTransliterate] = useState("");
  const [inputType, setInputType] = useState("uk");
  const [outputType, setOutputType] = useState("en");
  const [output, setOutput] = useState(null);

  useEffect(() => {
    setOutput(transliterate(
      textToTransliterate,
      inputType,
      outputType
    ));
  }, [textToTransliterate, inputType, outputType]);

  const handleTextChange = event => setTextToTransliterate(event.target.value);
  const handleOutputTypeChange = event => setOutputType(event.target.value);
  const handleInputTypeChange = event => setInputType(event.target.value);

  return (
    <div>
      <h2>Cyrillic to latin script converter</h2>
      <p>
        "Englify" option will convert cyrillic text into 
        &nbsp;
        <a target="_blank"
          href="https://en.wikipedia.org/wiki/BGN/PCGN_romanization">BGN/PCGN</a>
      </p>
      <form>
        <p>
          <label htmlFor="inputType">Input:</label>
          &nbsp;
          <select
            id="inputType"
            value={inputType}
            onChange={handleInputTypeChange}
          >
            <option value="uk">Ukrainian</option>
            <option value="ru">Russian</option>
          </select>
        </p>
        <p>
          <label htmlFor="outputType">Output: </label>
          &nbsp;
          <select
            id="outputType"
            value={outputType}
            onChange={handleOutputTypeChange}
            disabled={inputType === 'ru'}
          >
            <option value="en">Englify</option>
            {
              inputType === 'uk'
              && <>
                <option value="cz">Czechify</option>
                <option value="pl" disabled>Polonify</option>
              </>
            }
          </select>
        </p>
        <textarea
          onChange={handleTextChange}
          value={textToTransliterate}
          placeholder={"Cyrillic text here..."}
        />
      </form>
      <pre>{output}</pre>
    </div>
  );
}