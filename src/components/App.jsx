import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import messages from '../messages';
import { Main } from './Main';

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
            <Main
                appLanguage={appLanguage}
                handleAppLanguageChange={handleAppLanguageChange}
            />
        </IntlProvider>
    );
};
