import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import loggerCustom from './logger';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: loggerCustom(rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
