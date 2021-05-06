import { combineReducers } from 'redux';
import { ReduxStatus } from '../../interfaces';
import {
  ADD_TASK_LIST_FAILURE,
  ADD_TASK_LIST_REQUEST,
  ADD_TASK_LIST_SUCCESS,
  CREATE_LIST_FAILURE,
  CREATE_LIST_REQUEST,
  CREATE_LIST_SUCCESS,
  List,
  ListActionType,
  ListState,
  REMOVE_LIST_FAILURE,
  REMOVE_LIST_REQUEST,
  REMOVE_LIST_SUCCESS,
  REMOVE_TASK_LIST_FAILURE,
  REMOVE_TASK_LIST_REQUEST,
  REMOVE_TASK_LIST_SUCCESS,
  SET_LISTS,
  UPDATE_LIST_FAILURE,
  UPDATE_LIST_REQUEST,
  UPDATE_LIST_SUCCESS,
} from './types';

let initialState: ListState = {
  listStatus: {
    status: 'idle',
    error: null,
  },
  lists: [],
};

const listStatus = (state = initialState.listStatus, action: ListActionType): ReduxStatus => {
  switch (action.type) {
    case CREATE_LIST_REQUEST ||
      UPDATE_LIST_REQUEST ||
      REMOVE_LIST_REQUEST ||
      ADD_TASK_LIST_REQUEST ||
      REMOVE_TASK_LIST_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case CREATE_LIST_SUCCESS ||
      UPDATE_LIST_SUCCESS ||
      REMOVE_LIST_SUCCESS ||
      ADD_TASK_LIST_SUCCESS ||
      REMOVE_TASK_LIST_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
      };
    case CREATE_LIST_FAILURE ||
      UPDATE_LIST_FAILURE ||
      REMOVE_LIST_FAILURE ||
      ADD_TASK_LIST_FAILURE ||
      REMOVE_TASK_LIST_FAILURE:
      return {
        ...state,
        status: 'failed',
      };
    default:
      return state;
  }
};

const lists = (state = initialState.lists, action: ListActionType): List[] => {
  switch (action.type) {
    case SET_LISTS:
      return action.payload;
    case ADD_TASK_LIST_SUCCESS:
      return state.map((list) => {
        if (list.id !== action.payload.id) return list;
        return {
          ...list,
          tasksCount: list.tasksCount + 1,
        };
      });
    case REMOVE_TASK_LIST_SUCCESS:
      return state.map((list) => {
        if (list.id !== action.payload.id) return list;
        return {
          ...list,
          tasksCount: list.tasksCount - 1,
        };
      });
    case CREATE_LIST_SUCCESS:
      return [...state, action.payload];
    case REMOVE_LIST_SUCCESS:
      return state.filter(({ id }) => id !== action.payload.id);
    case UPDATE_LIST_SUCCESS:
      return state.map((list) => {
        if (list.id !== action.payload.id) return list;
        return { ...action.payload };
      });
    default:
      return state;
  }
};

export default combineReducers({
  listStatus,
  lists,
});
