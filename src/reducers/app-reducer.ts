import * as types from '../actions/types';
import { ChangeAction } from '../actions';

export interface AppInitialState {
    appLanguage: string;
    inputText: string;
    inputType: string;
    outputType: string;
    outputText: string;
}

const initialState: AppInitialState = {
    appLanguage: 'en',
    inputType: 'uk',
    outputType: 'en',
    inputText: '',
    outputText: '',
};

export const appReducer = (state = initialState, action: ChangeAction) => {
    switch (action.type) {
        case types.changeAppLanguage:
            return {
                ...state,
                appLanguage: action.payload,
            };
        case types.changeInputType:
            return {
                ...state,
                inputType: action.payload,
            };
        case types.changeOutputType:
            return {
                ...state,
                outputType: action.payload,
            };
        case types.changeInputText:
            return {
                ...state,
                inputText: action.payload,
            };
        case types.changeOutputText:
            return {
                ...state,
                outputText: action.payload,
            };
        default:
            return state;
    }
};
