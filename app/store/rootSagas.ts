import { all } from 'redux-saga/effects';
import todoSaga from './todo/sagas';
import listSaga from './list/sagas';
import achievementSaga from './achievements/sagas';

export default function* rootSaga() {
  yield all([todoSaga(), listSaga(), achievementSaga()]);
}
