import { combineReducers } from 'redux';
import { ReduxStatus } from '../../interfaces';
import {
    List,
    ListState,
    ListActionType,
    CREATE_LIST_REQUEST,
    CREATE_LIST_SUCCESS,
    CREATE_LIST_FAILURE,
} from './types';

const initialState: ListState = {
    listStatus: {
        status: 'idle',
        error: null,
    },
    lists: [],
};

const listStatus = (state = initialState.listStatus, action: ListActionType): ReduxStatus => {
    switch (action.type) {
        case CREATE_LIST_REQUEST:
            return {
                ...state,
                status: 'loading',
            };
        case CREATE_LIST_SUCCESS:
            return {
                ...state,
                status: 'succeeded',
            };
        case CREATE_LIST_FAILURE:
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
        case CREATE_LIST_SUCCESS:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default combineReducers({
    listStatus,
    lists,
});
