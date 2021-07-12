import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store.js';
import App from './App.js';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistStore} from 'redux-persist';

//wrap the app component in the redux provider and pass the store
const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store ={store}>
        <PersistGate 
            loading={<div>loading...</div>}
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, 
    document.getElementById('root'),
);