import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { changeAppLanguage } from '../actions';

interface HeaderProps {
    appLanguage: string;
    changeAppLanguage(lang: string): void;
}

interface HeaderState {
    appLanguage: string;
}

class _Header extends React.Component<HeaderProps> {
    handleAppLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target as HTMLSelectElement;
        this.props.changeAppLanguage(target.value);
    };

    render(): React.ReactNode {
        const { appLanguage } = this.props;

        return (
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
                        href='https://en.wikipedia.org/wiki/BGN/PCGN_romanization'>
                        BGN/PCGN
                    </a>
                </p>
            </header>
        );
    }
}

const mapStateToProps = (state: { appReducer: HeaderState }) => {
    const { appLanguage } = state.appReducer;

    return { appLanguage };
};

export const Header = connect(mapStateToProps, { changeAppLanguage })(_Header);
