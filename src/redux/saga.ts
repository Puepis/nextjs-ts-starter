import { all, takeLatest } from 'redux-saga/effects';
import { actionTypes } from './modules/example/actions';
import { loadDataSaga } from './modules/example/sagas';

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
