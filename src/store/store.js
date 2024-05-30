import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import loggerCustom from './logger';
const store = configureStore({
    reducer: loggerCustom(rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
