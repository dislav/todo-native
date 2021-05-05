import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { Provider } from 'react-redux';

import store from './app/store/store';
import HomeScreen from './app/screens/HomeScreen';
import ListScreen from './app/screens/ListScreen';

export default function App() {
    return (
        <Provider store={store}>
            <NativeRouter>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/list/:id" component={ListScreen} />
            </NativeRouter>
            <StatusBar style="auto" />
        </Provider>
    );
}
