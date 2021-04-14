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

export type TasksStatus = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string | null;
};

export type Task = {
    id: number;
    text: string;
    completed: boolean;
};

export interface TodoState {
    tasksStatus: TasksStatus;
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
    payload: string;
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
    payload: number;
}

interface RemoveTaskSuccessAction {
    type: typeof REMOVE_TASK_SUCCESS;
    payload: number;
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
    | ToggleTaskFailureAction;
