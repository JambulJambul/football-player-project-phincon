import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { login } from '@domain/api';
import { SET_LOGIN } from './constants';

function* doLogin({ postData, cbSuccess, cbFailed }) {
    yield put(setLoading(true));
    try {
        const response = yield call(login, postData)
        console.log(response)
        cbSuccess && cbSuccess();
    } catch (error) {
        console.log(error)
        cbFailed && cbFailed(error.message)
    }
    yield put(setLoading(false));
}

export default function* loginSaga() {
    yield takeLatest(SET_LOGIN, doLogin);
}