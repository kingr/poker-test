import { put, takeEvery, call } from 'redux-saga/effects';
import * as gameActions from '../actions/game';
import gameApi from '../api/game';

const rootSaga = function* handleSagas() {
    yield takeEvery(gameActions.GET_GAME, function* ({payload}) {
        yield put({ type: gameActions.LOADING_GAME, payload: true });
        try {
            const newGame = yield call(gameApi.getGame, payload);
            yield put({ type: gameActions.SET_GAME, payload: newGame });
            yield put({ type: gameActions.LOADING_GAME, payload: false });
        } catch (e) {
            console.log('handle error');
        }
    });
};

export default rootSaga;
