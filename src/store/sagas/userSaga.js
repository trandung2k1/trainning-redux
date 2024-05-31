import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../apis';
import * as actions from '../slices/userSlice';
import { createAction } from '@reduxjs/toolkit';

export const getUserStart = createAction('user/getUserStart');
export const getUsersStart = createAction('user/getUsersStart');
function* getUsers() {
    try {
        const response = yield call(api.fetchUsers);
        yield put(actions.getUsersSuccess(response.data));
    } catch (error) {
        yield put(actions.getUsersFailure());
    }
}
function* getUser(action) {
    try {
        const response = yield call(api.fetchUser, action.payload);
        yield put(actions.getUserSuccess(response.data));
    } catch (error) {
        yield put(actions.getUserFailure());
    }
}
function* userSaga() {
    yield takeEvery(getUsersStart, getUsers);
    yield takeEvery(getUserStart, getUser);
}
export default userSaga;
