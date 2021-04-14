import { combineReducers } from 'redux';
import {
    Task,
    TodoState,
    TasksStatus,
    TodoActionTypes,
    SET_TASKS,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
    REMOVE_TASK_REQUEST,
    REMOVE_TASK_SUCCESS,
    REMOVE_TASK_FAILURE,
    TOGGLE_TASK_REQUEST,
    TOGGLE_TASK_SUCCESS,
    TOGGLE_TASK_FAILURE,
} from './types';

let initialState: TodoState = {
    tasksStatus: {
        status: 'idle',
        error: null,
    },
    tasks: [],
    completed: 0,
};

const tasksStatus = (state = initialState.tasksStatus, action: TodoActionTypes): TasksStatus => {
    switch (action.type) {
        case ADD_TASK_REQUEST:
            return {
                ...state,
                status: 'loading',
            };
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                status: 'succeeded',
            };
        case ADD_TASK_FAILURE:
            return {
                status: 'failed',
                error: action.payload,
            };
        case REMOVE_TASK_REQUEST:
            return {
                ...state,
                status: 'loading',
            };
        case REMOVE_TASK_SUCCESS:
            return {
                ...state,
                status: 'succeeded',
            };
        case REMOVE_TASK_FAILURE:
            return {
                status: 'failed',
                error: action.payload,
            };
        case TOGGLE_TASK_REQUEST:
            return {
                ...state,
                status: 'loading',
            };
        case TOGGLE_TASK_SUCCESS:
            return {
                ...state,
                status: 'succeeded',
            };
        case TOGGLE_TASK_FAILURE:
            return {
                status: 'failed',
                error: action.payload,
            };
        default:
            return state;
    }
};

const tasks = (state = initialState.tasks, action: TodoActionTypes): Task[] => {
    switch (action.type) {
        case SET_TASKS:
            return action.payload;
        case ADD_TASK_SUCCESS:
            return [...state, action.payload];
        case REMOVE_TASK_SUCCESS:
            return state.filter(({ id }) => id !== action.payload);
        case TOGGLE_TASK_SUCCESS:
            return state.map((task) => {
                if (task.id !== action.payload) return task;
                return {
                    ...task,
                    completed: !task.completed,
                };
            });
        default:
            return state;
    }
};

export default combineReducers({
    tasksStatus,
    tasks,
});
