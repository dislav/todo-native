import {
  Achievement,
  AchievementsActionTypes,
  CLOSE_ACHIEVEMENT_FAILURE,
  CLOSE_ACHIEVEMENT_REQUEST,
  CLOSE_ACHIEVEMENT_SUCCESS,
  SET_ACHIEVEMENTS,
  UPDATE_ACHIEVEMENT_FAILURE,
  UPDATE_ACHIEVEMENT_REQUEST,
  UPDATE_ACHIEVEMENT_SUCCESS,
} from './types';

export const setCountAchievements = (payload: Achievement): AchievementsActionTypes => ({
  type: SET_ACHIEVEMENTS,
  payload,
});

// Update achievement
export const updateAchievementsRequest = (): AchievementsActionTypes => ({
  type: UPDATE_ACHIEVEMENT_REQUEST,
});

export const updateAchievementsSuccess = (payload: Achievement): AchievementsActionTypes => ({
  type: UPDATE_ACHIEVEMENT_SUCCESS,
  payload,
});

export const updateAchievementsFailure = (payload: string): AchievementsActionTypes => ({
  type: UPDATE_ACHIEVEMENT_FAILURE,
  payload,
});

// Close achievement
export const closeAchievementsRequest = (): AchievementsActionTypes => ({
  type: CLOSE_ACHIEVEMENT_REQUEST,
});

export const closeAchievementsSuccess = (payload: Achievement): AchievementsActionTypes => ({
  type: CLOSE_ACHIEVEMENT_SUCCESS,
  payload,
});

export const closeAchievementsFailure = (payload: string): AchievementsActionTypes => ({
  type: CLOSE_ACHIEVEMENT_FAILURE,
  payload,
});
