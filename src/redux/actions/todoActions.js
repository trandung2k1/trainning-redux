import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from '../constants';

export function getAllTodo() {
    // eslint-disable-next-line no-unused-vars
    async function actionGetAllTodo(dispatch, getState) {
        const res = await axios.get('https://api-todos-0ylw.onrender.com/api/v1/todos');
        dispatch({ type: types.GET_ALL_TODO, payload: res.data });
        toast.success('Get all todo successfully');
    }
    return actionGetAllTodo;
}

// eslint-disable-next-line no-unused-vars
export const getData = () => async (dispatch, getState) => {
    // console.log('getState', getState().todosState);
    try {
        const res = await axios.get('https://api-todos-0ylw.onrender.com/api/v1/todos');
        dispatch({ type: types.GET_ALL_TODO, payload: res.data });
    } catch (error) {
        console.log(error);
    }
};
