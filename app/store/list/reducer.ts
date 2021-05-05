import { combineReducers } from 'redux';
import { ReduxStatus } from '../../interfaces';
import {
    CREATE_LIST_FAILURE,
    CREATE_LIST_REQUEST,
    CREATE_LIST_SUCCESS,
    List,
    ListActionType,
    ListState,
    UPDATE_LIST_FAILURE,
    UPDATE_LIST_REQUEST,
    UPDATE_LIST_SUCCESS,
    REMOVE_LIST_REQUEST,
    REMOVE_LIST_SUCCESS,
    REMOVE_LIST_FAILURE,
    SET_LISTS,
    ADD_TASK_LIST,
    REMOVE_TASK_LIST,
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
        case UPDATE_LIST_REQUEST:
            return {
                ...state,
                status: 'loading',
            };
        case UPDATE_LIST_SUCCESS:
            return {
                ...state,
                status: 'succeeded',
            };
        case UPDATE_LIST_FAILURE:
            return {
                status: 'failed',
                error: action.payload,
            };
        case REMOVE_LIST_REQUEST:
            return {
                ...state,
                status: 'loading',
            };
        case REMOVE_LIST_SUCCESS:
            return {
                ...state,
                status: 'succeeded',
            };
        case REMOVE_LIST_FAILURE:
            return {
                status: 'failed',
                error: action.payload,
            };
        default:
            return state;
    }
};

const lists = (state = initialState.lists, action: ListActionType): List[] => {
    switch (action.type) {
        case SET_LISTS:
            return action.payload;
        case ADD_TASK_LIST:
            return state.map(list => {
                if (list.id === action.payload) return { ...list, tasksCount: list.tasksCount + 1 };
                return list;
            });
        case REMOVE_TASK_LIST:
            return state.map(list => {
                console.log(list.id, action.payload);
                if (list.id === action.payload) {
                    console.log(list);
                    return { ...list, tasksCount: list.tasksCount - 1 };
                }
                return list;
            });
        case CREATE_LIST_SUCCESS:
            return [...state, action.payload];
        case REMOVE_LIST_SUCCESS:
            return state.filter(({ id }) => id !== action.payload.id);
        case UPDATE_LIST_SUCCESS:
            return state.map((list) => {
                if (list.id === action.payload.id) return { ...list, title: action.payload.title };
                return list;
            });
        default:
            return state;
    }
};

export default combineReducers({
    listStatus,
    lists,
});
