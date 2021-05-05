import { ReduxStatus } from '../../interfaces';

export const SET_TASKS = 'todo/setTasks';

export const ADD_TASK_REQUEST = 'todo/addTaskRequest';
export const ADD_TASK_SUCCESS = 'todo/addTaskSuccess';
export const ADD_TASK_FAILURE = 'todo/addTaskFailure';

export const REMOVE_TASK_REQUEST = 'todo/removeTaskRequest';
export const REMOVE_TASK_SUCCESS = 'todo/removeTaskSuccess';
export const REMOVE_TASK_FAILURE = 'todo/removeTaskFailure';

export const TOGGLE_TASK_REQUEST = 'todo/toggleTaskRequest';
export const TOGGLE_TASK_SUCCESS = 'todo/toggleTaskSuccess';
export const TOGGLE_TASK_FAILURE = 'todo/toggleTaskFailure';

export const FAVORITE_TASK_REQUEST = 'todo/favoriteTaskRequest';
export const FAVORITE_TASK_SUCCESS = 'todo/favoriteTaskSuccess';
export const FAVORITE_TASK_FAILURE = 'todo/favoriteTaskFailure';

export type Task = {
    id: number;
    listId: number;
    text: string;
    completed: boolean;
    favorite: boolean;
};

export interface TodoState {
    tasksStatus: ReduxStatus;
    tasks: Task[];
    completed: number;
}

// Set tasks
interface SetTasksAction {
    type: typeof SET_TASKS;
    payload: Task[];
}

// Add task
interface AddTaskRequestAction {
    type: typeof ADD_TASK_REQUEST;
    payload: Task;
}

interface AddTaskSuccessAction {
    type: typeof ADD_TASK_SUCCESS;
    payload: Task;
}

interface AddTaskFailureAction {
    type: typeof ADD_TASK_FAILURE;
    payload: string;
}

// Remove task
interface RemoveTaskRequestAction {
    type: typeof REMOVE_TASK_REQUEST;
    payload: Task;
}

interface RemoveTaskSuccessAction {
    type: typeof REMOVE_TASK_SUCCESS;
    payload: Task;
}

interface RemoveTaskFailureAction {
    type: typeof REMOVE_TASK_FAILURE;
    payload: string;
}

// Toggle task
interface ToggleTaskRequestAction {
    type: typeof TOGGLE_TASK_REQUEST;
    payload: number;
}

interface ToggleTaskSuccessAction {
    type: typeof TOGGLE_TASK_SUCCESS;
    payload: number;
}

interface ToggleTaskFailureAction {
    type: typeof TOGGLE_TASK_FAILURE;
    payload: string;
}

// Favorite task
interface FavoriteTaskRequestAction {
    type: typeof FAVORITE_TASK_REQUEST;
    payload: number;
}

interface FavoriteTaskSuccessAction {
    type: typeof FAVORITE_TASK_SUCCESS;
    payload: number;
}

interface FavoriteTaskFailureAction {
    type: typeof FAVORITE_TASK_FAILURE;
    payload: string;
}

export type TodoActionTypes =
    | SetTasksAction
    | AddTaskRequestAction
    | AddTaskSuccessAction
    | AddTaskFailureAction
    | RemoveTaskRequestAction
    | RemoveTaskSuccessAction
    | RemoveTaskFailureAction
    | ToggleTaskRequestAction
    | ToggleTaskSuccessAction
    | ToggleTaskFailureAction
    | FavoriteTaskRequestAction
    | FavoriteTaskSuccessAction
    | FavoriteTaskFailureAction;
