import {createStore, combineReducers} from 'redux';
import { todos } from './todos/reducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const reducers = {
    todos,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
};

//need use combineRecuers to have a root for all reducers
//need use persisted reducer to keep info after refresh
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

//export configureStore and that will contain out store and all of the reducers inside
//connecting redux dev tools to chrome
export const configureStore = () => 
    createStore(
        persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__ (),
        );