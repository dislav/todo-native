import {
  ADD_TASK_LIST_FAILURE,
  ADD_TASK_LIST_REQUEST,
  ADD_TASK_LIST_SUCCESS,
  CREATE_LIST_FAILURE,
  CREATE_LIST_REQUEST,
  CREATE_LIST_SUCCESS,
  List,
  ListActionType,
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

export const setLists = (payload: List[]): ListActionType => ({
  type: SET_LISTS,
  payload,
});

// Create list
export const createListRequest = (history: any): ListActionType => ({
  type: CREATE_LIST_REQUEST,
  payload: history,
});

export const createListSuccess = (payload: List): ListActionType => ({
  type: CREATE_LIST_SUCCESS,
  payload,
});

export const createListFailure = (payload: string): ListActionType => ({
  type: CREATE_LIST_FAILURE,
  payload,
});

// Remove list
export const removeListRequest = (payload: number): ListActionType => ({
  type: REMOVE_LIST_REQUEST,
  payload,
});

export const removeListSuccess = (payload: List): ListActionType => ({
  type: REMOVE_LIST_SUCCESS,
  payload,
});

export const removeListFailure = (payload: string): ListActionType => ({
  type: REMOVE_LIST_FAILURE,
  payload,
});

// Update list
export const updateListRequest = (payload: List): ListActionType => ({
  type: UPDATE_LIST_REQUEST,
  payload,
});

export const updateListSuccess = (payload: List): ListActionType => ({
  type: UPDATE_LIST_SUCCESS,
  payload,
});

export const updateListFailure = (payload: string): ListActionType => ({
  type: UPDATE_LIST_FAILURE,
  payload,
});

// Add task to list
export const addTaskListRequest = (payload: number): ListActionType => ({
  type: ADD_TASK_LIST_REQUEST,
  payload,
});

export const addTaskListSuccess = (payload: List): ListActionType => ({
  type: ADD_TASK_LIST_SUCCESS,
  payload,
});

export const addTaskListFailure = (payload: string): ListActionType => ({
  type: ADD_TASK_LIST_FAILURE,
  payload,
});

// Remove task from list
export const removeTaskListRequest = (payload: number): ListActionType => ({
  type: REMOVE_TASK_LIST_REQUEST,
  payload,
});

export const removeTaskListSuccess = (payload: List): ListActionType => ({
  type: REMOVE_TASK_LIST_SUCCESS,
  payload,
});

export const removeTaskListFailure = (payload: string): ListActionType => ({
  type: REMOVE_TASK_LIST_FAILURE,
  payload,
});
