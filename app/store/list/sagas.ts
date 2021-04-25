import { put, call, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CREATE_LIST_REQUEST } from './types';
import { createListSuccess } from './actions';

function* createList() {
    try {
        const list = {
            id: Date.now(),
            title: 'Список без названия',
        };

        yield call(AsyncStorage.setItem, 'list', JSON.stringify(list));
        yield put(createListSuccess(list));
    } catch (e) {
        console.log(e);
    }
}

export default function* rootSaga() {
    yield takeEvery(CREATE_LIST_REQUEST, createList);
}
