import { call, put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Task,
  ADD_TASK_REQUEST,
  REMOVE_TASK_REQUEST,
  TOGGLE_TASK_REQUEST,
  FAVORITE_TASK_REQUEST,
} from './types';
import {
  addTaskSuccess,
  removeTaskSuccess,
  toggleTaskSuccess,
  favoriteTaskSuccess,
} from './actions';
import { parseAsyncStorage } from '../../helpers/asyncStorage';
import { addTaskListRequest, removeTaskListRequest } from '../list/actions';

function* createTask(action: { payload: Task }) {
  try {
    const localState: string[] = yield call(parseAsyncStorage, 'tasks');

    yield call(AsyncStorage.setItem, 'tasks', JSON.stringify([...localState, action.payload]));
    yield put(addTaskSuccess(action.payload));
    yield put(addTaskListRequest(action.payload.listId));
  } catch (e) {
    console.log(e);
  }
}

function* removeTask(action: { payload: Task }) {
  try {
    const localState: Task[] = yield call(parseAsyncStorage, 'tasks');
    const tasks = localState.filter(({ id }) => id !== action.payload.id);

    yield call(AsyncStorage.setItem, 'tasks', JSON.stringify(tasks));
    yield put(removeTaskSuccess(action.payload));
    yield put(removeTaskListRequest(action.payload.listId));
  } catch (e) {
    console.log(e);
  }
}

function* toggleTask(action: { payload: number }) {
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

function* favoriteTask(action: { payload: number }) {
  try {
    const localState: Task[] = yield call(parseAsyncStorage, 'tasks');
    const tasks = localState.map((task) => {
      if (task.id !== action.payload) return task;
      return {
        ...task,
        favorite: !task.favorite,
      };
    });

    yield call(AsyncStorage.setItem, 'tasks', JSON.stringify(tasks));
    yield put(favoriteTaskSuccess(action.payload));
  } catch (e) {
    console.log(e.message);
  }
}

export default function* todoSaga() {
  yield takeEvery(ADD_TASK_REQUEST, createTask);
  yield takeEvery(REMOVE_TASK_REQUEST, removeTask);
  yield takeEvery(TOGGLE_TASK_REQUEST, toggleTask);
  yield takeEvery(FAVORITE_TASK_REQUEST, favoriteTask);
}
