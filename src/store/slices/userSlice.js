import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    todos: [],
    loading: false,
    error: '',
    msg: '',
};
export const getAllTodo = createAsyncThunk('todos/getAllTodo', async (_, { rejectWithValue }) => {
    try {
        const response = await axios(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        mark: (state, action) => {
            state.msg = action.payload;
            console.error(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllTodo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        });
        builder.addCase(getAllTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { mark } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
