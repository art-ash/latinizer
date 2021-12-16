import * as types from './types';

export interface ChangeAction {
    type: string;
    payload: string;
}

export const changeAppLanguage = (lang: string): ChangeAction => ({
    type: types.changeAppLanguage,
    payload: lang,
});

export const changeInputType = (lang: string): ChangeAction => ({
    type: types.changeInputType,
    payload: lang,
});

export const changeOutputType = (lang: string): ChangeAction => ({
    type: types.changeOutputType,
    payload: lang,
});

export const changeInputText = (text: string): ChangeAction => ({
    type: types.changeInputText,
    payload: text,
});

export const changeOutputText = (text: string): ChangeAction => ({
    type: types.changeOutputText,
    payload: text,
});
