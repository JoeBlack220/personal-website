import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import dotenv from 'dotenv';
// Read global configuration
import 'semantic-ui-css/semantic.min.css';
dotenv.config();

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);