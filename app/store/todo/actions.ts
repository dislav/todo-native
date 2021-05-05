import {
    Task,
    TodoActionTypes,
    SET_TASKS,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    REMOVE_TASK_REQUEST,
    REMOVE_TASK_SUCCESS,
    TOGGLE_TASK_REQUEST,
    TOGGLE_TASK_SUCCESS,
} from './types';

export const setTasks = (payload: Task[]): TodoActionTypes => ({
    type: SET_TASKS,
    payload,
});

// Add task
export const addTaskRequest = (payload: Task): TodoActionTypes => ({
    type: ADD_TASK_REQUEST,
    payload,
});

export const addTaskSuccess = (payload: Task): TodoActionTypes => ({
    type: ADD_TASK_SUCCESS,
    payload,
});

// Remove task
export const removeTaskRequest = (payload: number): TodoActionTypes => ({
    type: REMOVE_TASK_REQUEST,
    payload,
});

export const removeTaskSuccess = (payload: number): TodoActionTypes => ({
    type: REMOVE_TASK_SUCCESS,
    payload,
});

// Remove task
export const toggleTaskRequest = (payload: number): TodoActionTypes => ({
    type: TOGGLE_TASK_REQUEST,
    payload,
});

export const toggleTaskSuccess = (payload: number): TodoActionTypes => ({
    type: TOGGLE_TASK_SUCCESS,
    payload,
});
