import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import { Main } from "./Main";
import messages from "../messages";

export const App: React.FC = () => {
  const [appLanguage, setAppLanguage] = useState("en");

  const handleAppLanguageChange = (event: { target: { value: string } }) => {
    const value = event.target.value;
    setAppLanguage(value);
  };

  return (
    <IntlProvider
      messages={messages[appLanguage]}
      locale={appLanguage}
      defaultLocale="en"
    >
      <>
        <header className="mb-4">
          <div className="mb-3">
            <label htmlFor="appLanguage" className="me-2">
              <FormattedMessage id="appLanguageLbl" />:
            </label>
            <select
              id="appLanguage"
              value={appLanguage}
              onChange={handleAppLanguageChange}
            >
              <>
                {/* <FormattedMessage id='appLanguageOptEn'>
                        {(message) => <option value='en'>{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage id='appLanguageOptUk'>
                        {(message) => <option value='uk'>{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage id='appLanguageOptRu'>
                        {(message) => <option value='ru'>{message}</option>}
                    </FormattedMessage> */}
                <option value="en">
                  <FormattedMessage id="appLanguageOptEn" />
                </option>
                <option value="uk">
                  <FormattedMessage id="appLanguageOptUk" />
                </option>
                <option value="ru">
                  <FormattedMessage id="appLanguageOptRu" />
                </option>
              </>
            </select>
          </div>
          <h2>
            <FormattedMessage id="appTitle" />
          </h2>
          <p>
            <FormattedMessage id="bgnPcgnHelpText" /> &nbsp;
            <a
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/BGN/PCGN_romanization"
            >
              BGN/PCGN
            </a>
          </p>
        </header>
        <Main />
      </>
    </IntlProvider>
  );
};
