/* global document */
// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Provider from 'react-redux/es/components/Provider';
import App from './App';
import store from './store/store';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);