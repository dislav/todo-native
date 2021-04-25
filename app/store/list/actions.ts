import { List, ListActionType, CREATE_LIST_REQUEST, CREATE_LIST_SUCCESS } from './types';

export const createListRequest = (): ListActionType => ({
    type: CREATE_LIST_REQUEST,
});

export const createListSuccess = (payload: List): ListActionType => ({
    type: CREATE_LIST_SUCCESS,
    payload,
});