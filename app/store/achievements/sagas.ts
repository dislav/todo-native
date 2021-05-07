import { put, call, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Achievement, UPDATE_ACHIEVEMENT_REQUEST, CLOSE_ACHIEVEMENT_REQUEST } from './types';
import { updateAchievementsSuccess, closeAchievementsSuccess } from './actions';
import { getAchievementEvents } from '../../helpers/achievements';

const getAchievement = async (): Promise<Achievement> => {
  const defaultAchievement = { text: '', count: 0, open: false };
  try {
    const achievement = await AsyncStorage.getItem('achievements');
    if (achievement !== null) return JSON.parse(achievement);
    return defaultAchievement;
  } catch {
    return defaultAchievement;
  }
};

function* updateAchievement() {
  try {
    const lastAchievement: Achievement = yield call(getAchievement);
    const achievement = getAchievementEvents(lastAchievement);

    yield call(AsyncStorage.setItem, 'achievements', JSON.stringify(achievement));
    yield put(updateAchievementsSuccess(achievement));
  } catch (e) {
    console.log(e.message);
  }
}

function* closeAchievement() {
  try {
    const lastAchievement: Achievement = yield call(getAchievement);
    const achievement: Achievement = {
      ...lastAchievement,
      open: false,
    };

    yield call(AsyncStorage.setItem, 'achievements', JSON.stringify(achievement));
    yield put(closeAchievementsSuccess(achievement));
  } catch (e) {
    console.log(e.message);
  }
}

export default function* rootSaga() {
  yield takeEvery(UPDATE_ACHIEVEMENT_REQUEST, updateAchievement);
  yield takeEvery(CLOSE_ACHIEVEMENT_REQUEST, closeAchievement);
}
