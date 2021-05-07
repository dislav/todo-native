import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { parseAsyncStorage } from '../helpers/asyncStorage';
import { List } from './list/types';
import { Task } from './todo/types';

import { setLists } from './list/actions';
import { setTasks } from './todo/actions';
import { setCountAchievements } from './achievements/actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

(async () => {
    try {
        const achievements = await AsyncStorage.getItem('achievements');
        if (achievements !== null) store.dispatch(setCountAchievements(JSON.parse(achievements)));

        const lists = await parseAsyncStorage<List>('lists');
        store.dispatch(setLists(lists));

        const localState = await parseAsyncStorage<Task>('tasks');
        store.dispatch(setTasks(localState));
    } catch (e) {
        console.log(e.message);
    }
})();

sagaMiddleware.run(rootSagas);

export default store;
