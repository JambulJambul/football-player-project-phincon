import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { login } from '@domain/api';
import { DO_LOGIN } from './constants';
import { setLogin, setToken } from '@containers/Client/actions';

function* doLogin({ postData, cbSuccess, cbFailed }) {
    yield put(setLoading(true));
    try {
        const response = yield call(login, postData)
        yield put(setLogin(true));
        yield put(setToken(response.token));
        cbSuccess && cbSuccess();
    } catch (error) {
        cbFailed && cbFailed(error?.response?.data?.message)
    }
    yield put(setLoading(false));
}

export default function* loginSaga() {
    yield takeLatest(DO_LOGIN, doLogin);
}