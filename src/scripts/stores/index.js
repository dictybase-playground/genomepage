import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {devTools} from 'redux-devtools';
import * as reducers from 'reducers';
import {promiseMiddleware} from '../middleware/promise';

let buildStore;

/* eslint-disable */
if (__DEBUG__) {
/* eslint-enable */
    buildStore = compose(applyMiddleware(ensemblMiddleware), devTools(), createStore);
} else {
    buildStore = compose(applyMiddleware(promiseMiddleware), createStore);
}

export default buildStore(combineReducers(reducers));
