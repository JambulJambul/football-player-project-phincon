import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import loginSaga from '@pages/Login/saga';
import RegisterSaga from '@pages/Register/saga';
import homeSaga from '@pages/Home/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    loginSaga(),
    RegisterSaga(),
    homeSaga(),
  ]);
}
