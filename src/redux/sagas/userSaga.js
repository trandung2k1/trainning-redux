import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../apis';
import {
    getUserFailure,
    getUsersFailure,
    getUsersSucess,
    getUserSucess,
} from '../actions/userActions';

function* getUsers() {
    try {
        const res = yield call(api.getUsers);
        yield put(getUsersSucess(res.data));
    } catch (error) {
        yield put(getUsersFailure(error));
    }
}
function* getUser(action) {
    console.log('Action', action); // {type, payload}
    try {
        const res = yield call(api.getUser, action.payload);
        yield put(getUserSucess(res.data));
    } catch (error) {
        yield put(getUserFailure(error));
    }
}
function* userSaga() {
    yield takeEvery('GET_USERS_START', getUsers);
    yield takeEvery('GET_USER_START', getUser);
}
export default userSaga;
