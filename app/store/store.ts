import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

import { setTasks } from './todo/actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

(async () => {
    try {
        const localState = await AsyncStorage.getItem('tasks');
        if (localState !== null) store.dispatch(setTasks(JSON.parse(localState)));
    } catch (e) {
        console.log(e.message);
    }
})();

sagaMiddleware.run(rootSagas);

export default store;
