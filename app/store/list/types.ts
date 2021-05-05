import { ReduxStatus } from '../../interfaces';

export const SET_LISTS = 'list/setLists';
export const ADD_TASK_LIST = 'list/addTaskList';
export const REMOVE_TASK_LIST = 'list/removeTaskList';

export const CREATE_LIST_REQUEST = 'list/createListRequest';
export const CREATE_LIST_SUCCESS = 'list/createListSuccess';
export const CREATE_LIST_FAILURE = 'list/createListFailure';

export const REMOVE_LIST_REQUEST = 'list/removeListRequest';
export const REMOVE_LIST_SUCCESS = 'list/removeListSuccess';
export const REMOVE_LIST_FAILURE = 'list/removeListFailure';

export const UPDATE_LIST_REQUEST = 'list/updateListRequest';
export const UPDATE_LIST_SUCCESS = 'list/updateListSuccess';
export const UPDATE_LIST_FAILURE = 'list/updateListFailure';

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

interface AddTaskListAction {
    type: typeof ADD_TASK_LIST;
    payload: number;
}

interface RemoveTaskListAction {
    type: typeof REMOVE_TASK_LIST;
    payload: number;
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

export type ListActionType =
    | SetListsAction
    | AddTaskListAction
    | RemoveTaskListAction
    | CreateListRequestAction
    | CreateListSuccessAction
    | CreateListFailureAction
    | RemoveListRequestAction
    | RemoveListSuccessAction
    | RemoveListFailureAction
    | UpdateListRequestAction
    | UpdateListSuccessAction
    | UpdateListFailureAction;
