import { combineReducers } from 'redux';
import todoReducer from './todo/reducer';
import listReducer from './list/reducer';
import achievementsReducer from './achievements/reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  list: listReducer,
  achievements: achievementsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
