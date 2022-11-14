import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Header } from './Header';
import { Main } from './Main';
import messages from '../messages';

export const App = () => {
    const [appLanguage, setAppLanguage] = useState('en');

    const handleAppLanguageChange = (event) => {
        const value = event.target.value;
        setAppLanguage(value);
    };

    return (
        <IntlProvider
            messages={messages[appLanguage]}
            locale={appLanguage}
            defaultLocale='en'>
            <>
                <Header
                    appLanguage={appLanguage}
                    handleAppLanguageChange={handleAppLanguageChange}
                />
                <Main />
            </>
        </IntlProvider>
    );
};
