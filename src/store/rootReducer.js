import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './slices/userSlice';

const rootReducer = combineReducers({
    todo: todoReducer,
});

export default rootReducer;
