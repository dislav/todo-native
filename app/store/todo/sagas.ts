import { call, put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task, ADD_TASK_REQUEST, REMOVE_TASK_REQUEST, TOGGLE_TASK_REQUEST } from './types';
import { addTaskSuccess, removeTaskSuccess, toggleTaskSuccess } from './actions';
import { parseAsyncStorage } from '../../helpers/asyncStorage';
import { addTaskList } from '../list/actions';

function* addTaskAsync(action: { payload: Task }) {
    try {
        const localState: string[] = yield call(parseAsyncStorage, 'tasks');

        yield call(AsyncStorage.setItem, 'tasks', JSON.stringify([...localState, action.payload]));
        yield put(addTaskSuccess(action.payload));
        yield put(addTaskList(action.payload.listId));
    } catch (e) {
        console.log(e);
    }
}

function* removeTaskAsync(action: { payload: number }) {
    try {
        const localState: Task[] = yield call(parseAsyncStorage, 'tasks');
        const tasks = localState.filter(({ id }) => id !== action.payload);

        yield call(AsyncStorage.setItem, 'tasks', JSON.stringify(tasks));
        yield put(removeTaskSuccess(action.payload));
    } catch (e) {
        console.log(e);
    }
}

function* toggleTaskAsync(action: { payload: number }) {
    try {
        const localState: Task[] = yield call(parseAsyncStorage, 'tasks');
        const tasks = localState.map((task) => {
            if (task.id !== action.payload) return task;
            return {
                ...task,
                completed: !task.completed,
            };
        });

        yield call(AsyncStorage.setItem, 'tasks', JSON.stringify(tasks));
        yield put(toggleTaskSuccess(action.payload));
    } catch (e) {
        console.log(e);
    }
}

export default function* todoSaga() {
    yield takeEvery(ADD_TASK_REQUEST, addTaskAsync);
    yield takeEvery(REMOVE_TASK_REQUEST, removeTaskAsync);
    yield takeEvery(TOGGLE_TASK_REQUEST, toggleTaskAsync);
}
