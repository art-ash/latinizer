import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Header = ({ appLanguage, handleAppLanguageChange }) => {
    return (
        <header className='mb-4'>
            <div className='mb-3'>
                <label htmlFor='appLanguage' className='me-2'>
                    <FormattedMessage id='appLanguageLbl' />:
                </label>
                <select
                    id='appLanguage'
                    value={appLanguage}
                    onChange={handleAppLanguageChange}>
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
            </div>
            <h2>
                <FormattedMessage id='appTitle' />
            </h2>
            <p>
                <FormattedMessage id='bgnPcgnHelpText' /> &nbsp;
                <a
                    className='text-white'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://en.wikipedia.org/wiki/BGN/PCGN_romanization'>
                    BGN/PCGN
                </a>
            </p>
        </header>
    );
};
