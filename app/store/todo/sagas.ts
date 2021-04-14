import { call, put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_TASK_REQUEST, REMOVE_TASK_REQUEST, TOGGLE_TASK_REQUEST } from './types';
import { addTaskSuccess, removeTaskSuccess, toggleTaskSuccess } from './actions';

const parseAsyncStorage = async (): Promise<string[]> => {
    try {
        const localState = await AsyncStorage.getItem('tasks');
        if (localState !== null) return JSON.parse(localState);
        return [];
    } catch {
        return [];
    }
};

function* addTaskAsync(action: { payload: string }) {
    try {
        const localState: string[] = yield call(parseAsyncStorage);

        const task = {
            id: Date.now(),
            text: action.payload,
            completed: false,
        };

        yield call(AsyncStorage.setItem, 'tasks', JSON.stringify([...localState, task]));
        yield put(addTaskSuccess(task));
    } catch (e) {}
}

function* removeTaskAsync(action: { payload: number }) {
    try {
        const localState: string[] = yield call(parseAsyncStorage);
        const tasks = localState.filter(({ id }) => id !== action.payload);

        yield call(AsyncStorage.setItem, 'tasks', JSON.stringify(tasks));
        yield put(removeTaskSuccess(action.payload));
    } catch (e) {}
}

function* toggleTaskAsync(action: { payload: number }) {
    try {
        const localState: string[] = yield call(parseAsyncStorage);
        const tasks = localState.map((task) => {
            if (task.id !== action.payload) return task;
            return {
                ...task,
                completed: !task.completed,
            };
        });

        yield call(AsyncStorage.setItem, 'tasks', JSON.stringify(tasks));
        yield put(toggleTaskSuccess(action.payload));
    } catch (e) {}
}

export default function* todoSaga() {
    yield takeEvery(ADD_TASK_REQUEST, addTaskAsync);
    yield takeEvery(REMOVE_TASK_REQUEST, removeTaskAsync);
    yield takeEvery(TOGGLE_TASK_REQUEST, toggleTaskAsync);
}
