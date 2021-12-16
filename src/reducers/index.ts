import { combineReducers } from 'redux';
import { appReducer } from './app-reducer';
import { AppInitialState } from '../reducers/app-reducer';

interface StoreState {
    appReducer: AppInitialState;
}

export const reducers = combineReducers<StoreState>({
    appReducer,
});
