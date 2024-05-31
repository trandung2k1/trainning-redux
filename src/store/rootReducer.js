import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer,
});

export default rootReducer;
