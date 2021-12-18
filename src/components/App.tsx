import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import msgs from '../messages';
import { Header } from './Header';
import { Controls } from './Controls';
import { changeAppLanguage } from '../actions';

interface AppProps {
    appLanguage: string;
    outputText: string;
    changeAppLanguage(lang: string): void;
}

interface AppState {
    appLanguage: string;
    outputText: string;
}

class _App extends React.Component<AppProps> {
    handleAppLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target as HTMLSelectElement;
        this.props.changeAppLanguage(target.value);
    };

    render(): React.ReactNode {
        const { appLanguage, outputText } = this.props;

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
                defaultLocale='en'>
                <Header />
                <Controls />
                <pre>{outputText}</pre>
            </IntlProvider>
        );
    }
}

const mapStateToProps = (state: { appReducer: AppState }) => {
    const { appLanguage, outputText } = state.appReducer;

    return {
        appLanguage,
        outputText,
    };
};

export const App = connect(mapStateToProps, { changeAppLanguage })(_App);
