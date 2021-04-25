import { ReduxStatus, Error } from '../../interfaces';

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
};

export interface ListState {
    listStatus: ReduxStatus;
    lists: List[];
}

// Create list
interface CreateListRequestAction {
    type: typeof CREATE_LIST_REQUEST;
}

interface CreateListSuccessAction {
    type: typeof CREATE_LIST_SUCCESS;
    payload: List;
}

interface CreateListFailureAction {
    type: typeof CREATE_LIST_FAILURE;
    payload: Error;
}

export type ListActionType =
    | CreateListRequestAction
    | CreateListSuccessAction
    | CreateListFailureAction;
