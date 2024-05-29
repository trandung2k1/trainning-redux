import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { thunk } from 'redux-thunk';
import loggerCustom from './logger';
const store = createStore(
    loggerCustom(rootReducer),
    composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
