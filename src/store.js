import {createStore, combineReducers} from 'redux';
import { todos } from './todos/reducers';

const reducers = {
    todos,
};

//need use combineRecuers to have a root for all reducers
const rootReducer = combineReducers(reducers);

//export configureStore and that will contain out store and all of the reducers inside
export const configureStore = () => createStore(rootReducer);