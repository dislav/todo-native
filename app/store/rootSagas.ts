import { all } from 'redux-saga/effects';
import todoSaga from './todo/sagas';
import listSaga from './list/sagas';

export default function* rootSaga() {
    yield all([todoSaga(), listSaga()]);
}
