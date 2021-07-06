import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store.js';
import App from './App.js';


//wrap the app component in the redux provider and pass the store
ReactDOM.render(
    <Provider store ={configureStore()}>
        <App />
    </Provider>, 
    document.getElementById('root'),
);