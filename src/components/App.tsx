import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import msgs from '../messages';
import FormBlock from './FormBlock';

export const App = (): JSX.Element => {
    const [appLanguage, setAppLanguage] = useState('en');

    const handleAppLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const target = event.target as HTMLSelectElement;
        setAppLanguage(target.value);
    };

    const messages =
        appLanguage === 'en'
            ? msgs.en
            : appLanguage === 'uk'
            ? msgs.uk
            : msgs.ru;

    return (
        <IntlProvider
            messages={messages}
            locale={appLanguage}
            defaultLocale='en'
        >
            <div>
                <header>
                    <label htmlFor='appLanguage'>
                        <FormattedMessage id='appLanguageLbl' />
                        :&nbsp;
                    </label>
                    <select
                        id='appLanguage'
                        value={appLanguage}
                        onChange={handleAppLanguageChange}
                    >
                        <FormattedMessage id='appLanguageOptEn'>
                            {message => <option value='en'>{message}</option>}
                        </FormattedMessage>
                        <FormattedMessage id='appLanguageOptUk'>
                            {message => <option value='uk'>{message}</option>}
                        </FormattedMessage>
                        <FormattedMessage id='appLanguageOptRu'>
                            {message => <option value='ru'>{message}</option>}
                        </FormattedMessage>
                    </select>
                    <h2>
                        <FormattedMessage id='appTitle' />
                    </h2>
                </header>
                <main>
                    <p>
                        <FormattedMessage id='bgnPcgnHelpText' /> &nbsp;
                        <a
                            target='_blank'
                            href='https://en.wikipedia.org/wiki/BGN/PCGN_romanization'
                        >
                            BGN/PCGN
                        </a>
                    </p>
                    <FormBlock />
                </main>
            </div>
        </IntlProvider>
    );
};
