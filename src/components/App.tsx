import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import msgs from '../messages';
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
                <header>
                    <label htmlFor='appLanguage'>
                        <FormattedMessage id='appLanguageLbl' />
                        :&nbsp;
                    </label>
                    <select
                        id='appLanguage'
                        value={appLanguage}
                        onChange={this.handleAppLanguageChange}>
                        <FormattedMessage id='appLanguageOptEn'>
                            {(message) => <option value='en'>{message}</option>}
                        </FormattedMessage>
                        <FormattedMessage id='appLanguageOptUk'>
                            {(message) => <option value='uk'>{message}</option>}
                        </FormattedMessage>
                        <FormattedMessage id='appLanguageOptRu'>
                            {(message) => <option value='ru'>{message}</option>}
                        </FormattedMessage>
                    </select>
                    <h2>
                        <FormattedMessage id='appTitle' />
                    </h2>
                    <p>
                        <FormattedMessage id='bgnPcgnHelpText' /> &nbsp;
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://en.wikipedia.org/wiki/BGN/PCGN_romanization'>
                            BGN/PCGN
                        </a>
                    </p>
                </header>
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
