import { ReduxStatus } from '../../interfaces';

export const SET_LISTS = 'list/setLists';

export const CREATE_LIST_REQUEST = 'list/createListRequest';
export const CREATE_LIST_SUCCESS = 'list/createListSuccess';
export const CREATE_LIST_FAILURE = 'list/createListFailure';

export const REMOVE_LIST_REQUEST = 'list/removeListRequest';
export const REMOVE_LIST_SUCCESS = 'list/removeListSuccess';
export const REMOVE_LIST_FAILURE = 'list/removeListFailure';

export const UPDATE_LIST_REQUEST = 'list/updateListRequest';
export const UPDATE_LIST_SUCCESS = 'list/updateListSuccess';
export const UPDATE_LIST_FAILURE = 'list/updateListFailure';

export const ADD_TASK_LIST_REQUEST = 'list/addTaskListRequest';
export const ADD_TASK_LIST_SUCCESS = 'list/addTaskListSuccess';
export const ADD_TASK_LIST_FAILURE = 'list/addTaskListFailure';

export const REMOVE_TASK_LIST_REQUEST = 'list/removeTaskListRequest';
export const REMOVE_TASK_LIST_SUCCESS = 'list/removeTaskListSuccess';
export const REMOVE_TASK_LIST_FAILURE = 'list/removeTaskListFailure';

export type List = {
  id: number;
  title: string;
  tasksCount: number;
};

export interface ListState {
  listStatus: ReduxStatus;
  lists: List[];
}

interface SetListsAction {
  type: typeof SET_LISTS;
  payload: List[];
}

// Create list
interface CreateListRequestAction {
  type: typeof CREATE_LIST_REQUEST;
  payload: any;
}

interface CreateListSuccessAction {
  type: typeof CREATE_LIST_SUCCESS;
  payload: List;
}

interface CreateListFailureAction {
  type: typeof CREATE_LIST_FAILURE;
  payload: string;
}

// Remove list
interface RemoveListRequestAction {
  type: typeof REMOVE_LIST_REQUEST;
  payload: number;
}

interface RemoveListSuccessAction {
  type: typeof REMOVE_LIST_SUCCESS;
  payload: List;
}

interface RemoveListFailureAction {
  type: typeof REMOVE_LIST_FAILURE;
  payload: string;
}

// Update list
interface UpdateListRequestAction {
  type: typeof UPDATE_LIST_REQUEST;
  payload: List;
}

interface UpdateListSuccessAction {
  type: typeof UPDATE_LIST_SUCCESS;
  payload: List;
}

interface UpdateListFailureAction {
  type: typeof UPDATE_LIST_FAILURE;
  payload: string;
}

// Add task to list
interface AddTaskListRequestAction {
  type: typeof ADD_TASK_LIST_REQUEST;
  payload: number;
}

interface AddTaskListSuccessAction {
  type: typeof ADD_TASK_LIST_SUCCESS;
  payload: List;
}

interface AddTaskListFailureAction {
  type: typeof ADD_TASK_LIST_FAILURE;
  payload: string;
}

// Remove task from list
interface RemoveTaskListRequestAction {
  type: typeof REMOVE_TASK_LIST_REQUEST;
  payload: number;
}

interface RemoveTaskListSuccessAction {
  type: typeof REMOVE_TASK_LIST_SUCCESS;
  payload: List;
}

interface RemoveTaskListFailureAction {
  type: typeof REMOVE_TASK_LIST_FAILURE;
  payload: string;
}

export type ListActionType =
  | SetListsAction
  | CreateListRequestAction
  | CreateListSuccessAction
  | CreateListFailureAction
  | RemoveListRequestAction
  | RemoveListSuccessAction
  | RemoveListFailureAction
  | UpdateListRequestAction
  | UpdateListSuccessAction
  | UpdateListFailureAction
  | AddTaskListRequestAction
  | AddTaskListSuccessAction
  | AddTaskListFailureAction
  | RemoveTaskListRequestAction
  | RemoveTaskListSuccessAction
  | RemoveTaskListFailureAction;
