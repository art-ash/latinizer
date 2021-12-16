import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { reducers } from './reducers';
import { App } from './components/App';
import './style.css';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger))
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
