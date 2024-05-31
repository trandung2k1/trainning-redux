import { combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    todosState: todoReducer,
    user: userReducer,
});

export default rootReducer;
