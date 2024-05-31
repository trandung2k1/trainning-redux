import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { thunk } from 'redux-thunk';
import loggerCustom from './logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const saga = createSagaMiddleware();
const store = createStore(
    loggerCustom(rootReducer),
    composeWithDevTools(applyMiddleware(logger, thunk, saga)),
);
saga.run(rootSaga);
export default store;
