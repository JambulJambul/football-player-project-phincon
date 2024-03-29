import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getAllPlayersURL, getMultipleClubsURL } from '@domain/api';
import { GET_ALL_PLAYERS, GET_SELECTED_CLUBS } from './constants';
import { setAllPlayers, setSelectedClubs } from './actions';

function* getAllPlayers({ cbSuccess, cbFailed }) {
    yield put(setLoading(true));
    try {
        const response = yield call(getAllPlayersURL)
        yield put(setAllPlayers(response))
        cbSuccess && cbSuccess("Success get all players");
    } catch (error) {
        cbFailed && cbFailed(error)
    }
    yield put(setLoading(false));
}

function* getSelectedClubs({ club_id_array, cbSuccess, cbFailed }) {
    yield put(setLoading(true));
    try {
        const response = yield call(getMultipleClubsURL, club_id_array)
        yield put(setSelectedClubs(response))
        cbSuccess && cbSuccess("Success get all clubs");
    } catch (error) {
        cbFailed && cbFailed(error)
    }
    yield put(setLoading(false));
}

export default function* homeSaga() {
    yield takeLatest(GET_ALL_PLAYERS, getAllPlayers);
    yield takeLatest(GET_SELECTED_CLUBS, getSelectedClubs);
}