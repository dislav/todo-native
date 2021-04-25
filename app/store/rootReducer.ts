import { combineReducers } from 'redux';
import todoReducer from './todo/reducer';
import listReducer from './list/reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    list: listReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
