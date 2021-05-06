import { put, call, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  List,
  CREATE_LIST_REQUEST,
  REMOVE_LIST_REQUEST,
  UPDATE_LIST_REQUEST,
  ADD_TASK_LIST_REQUEST,
  REMOVE_TASK_LIST_REQUEST,
} from './types';
import {
  createListSuccess,
  removeListSuccess,
  updateListSuccess,
  addTaskListSuccess,
  removeTaskListSuccess,
} from './actions';
import { parseAsyncStorage } from '../../helpers/asyncStorage';

function* createList(action: { payload: any }) {
  try {
    const lists: List[] = yield call(parseAsyncStorage, 'lists');

    const list: List = {
      id: Date.now(),
      title: 'Список без названия',
      tasksCount: 0,
    };

    yield call(AsyncStorage.setItem, 'lists', JSON.stringify([...lists, list]));
    yield put(createListSuccess(list));
    action.payload.push(`/list/${list.id}`);
  } catch (e) {
    console.log(e);
  }
}

function* removeList(action: { payload: number }) {
  try {
    const lists: List[] = yield call(parseAsyncStorage, 'lists');
    const [list] = lists.filter(({ id }) => id === action.payload);
    const newList = lists.filter(({ id }) => id !== action.payload);

    yield call(AsyncStorage.setItem, 'lists', JSON.stringify(newList));
    yield put(removeListSuccess(list));
  } catch (e) {
    console.log(e);
  }
}

function* updateList(action: { payload: List }) {
  try {
    const lists: List[] = yield call(parseAsyncStorage, 'lists');
    const [findList] = lists.filter(({ id }) => id === action.payload.id);
    findList.title = action.payload.title;

    yield call(AsyncStorage.setItem, 'lists', JSON.stringify([...lists]));
    yield put(updateListSuccess(findList));
  } catch (e) {
    console.log(e);
  }
}

function* addTaskList(action: { payload: number }) {
  try {
    const lists: List[] = yield call(parseAsyncStorage, 'lists');
    const updatedList = lists.map((list) => {
      if (list.id !== action.payload) return list;
      return {
        ...list,
        tasksCount: list.tasksCount + 1,
      };
    });
    const [findList] = lists.filter(({ id }) => id === action.payload);

    yield call(AsyncStorage.setItem, 'lists', JSON.stringify(updatedList));
    yield put(addTaskListSuccess(findList));
  } catch (e) {
    console.log(e);
  }
}

function* removeTaskList(action: { payload: number }) {
  try {
    const lists: List[] = yield call(parseAsyncStorage, 'lists');
    const updatedList = lists.map((list) => {
      if (list.id !== action.payload) return list;
      return {
        ...list,
        tasksCount: list.tasksCount - 1,
      };
    });
    const [findList] = lists.filter(({ id }) => id === action.payload);

    yield call(AsyncStorage.setItem, 'lists', JSON.stringify(updatedList));
    yield put(removeTaskListSuccess(findList));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(CREATE_LIST_REQUEST, createList);
  yield takeEvery(REMOVE_LIST_REQUEST, removeList);
  yield takeEvery(UPDATE_LIST_REQUEST, updateList);
  yield takeEvery(ADD_TASK_LIST_REQUEST, addTaskList);
  yield takeEvery(REMOVE_TASK_LIST_REQUEST, removeTaskList);
}
