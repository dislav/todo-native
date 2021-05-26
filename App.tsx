import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import store from './app/store/store';

import Achievements from './app/components/Achievements/Achievements';
import HomeScreen from './app/screens/HomeScreen';
import ListScreen from './app/screens/ListScreen';
import FavoritesScreen from './app/screens/FavoritesScreen';
import TasksScreen from './app/screens/TasksScreen';
import AchievementsScreen from './app/screens/AchievementsScreen';

export default function App() {
  return (
    <Provider store={store}>
      <Achievements />
      <NativeRouter>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/favorite" component={FavoritesScreen} />
        <Route path="/tasks" component={TasksScreen} />
        <Route path="/achievements" component={AchievementsScreen} />
        <Route path="/list/:id" component={ListScreen} />
      </NativeRouter>
      <StatusBar style="auto" />
    </Provider>
  );
}
