import { ReduxStatus } from '../../interfaces';

export const SET_ACHIEVEMENTS = 'achievements/setAchievements';

export const UPDATE_ACHIEVEMENT_REQUEST = 'achievements/updateAchievementRequest';
export const UPDATE_ACHIEVEMENT_SUCCESS = 'achievements/updateAchievementSuccess';
export const UPDATE_ACHIEVEMENT_FAILURE = 'achievements/updateAchievementFailure';

export const CLOSE_ACHIEVEMENT_REQUEST = 'achievements/closeAchievementRequest';
export const CLOSE_ACHIEVEMENT_SUCCESS = 'achievements/closeAchievementSuccess';
export const CLOSE_ACHIEVEMENT_FAILURE = 'achievements/closeAchievementFailure';

export interface Achievement {
  text: string;
  count: number;
  open: boolean;
  list: string[];
}

export interface AchievementsState extends Achievement {
  achievementsStatus: ReduxStatus;
}

// Set achievements
interface SetAchievementsAction {
  type: typeof SET_ACHIEVEMENTS;
  payload: Achievement;
}

// Update achievement
interface UpdateAchievementRequestAction {
  type: typeof UPDATE_ACHIEVEMENT_REQUEST;
}

interface UpdateAchievementSuccessAction {
  type: typeof UPDATE_ACHIEVEMENT_SUCCESS;
  payload: Achievement;
}

interface UpdateAchievementFailureAction {
  type: typeof UPDATE_ACHIEVEMENT_FAILURE;
  payload: string;
}

// Close achievement
interface CloseAchievementRequestAction {
  type: typeof CLOSE_ACHIEVEMENT_REQUEST;
}

interface CloseAchievementSuccessAction {
  type: typeof CLOSE_ACHIEVEMENT_SUCCESS;
  payload: Achievement;
}

interface CloseAchievementFailureAction {
  type: typeof CLOSE_ACHIEVEMENT_FAILURE;
  payload: string;
}

export type AchievementsActionTypes =
  | SetAchievementsAction
  | UpdateAchievementRequestAction
  | UpdateAchievementSuccessAction
  | UpdateAchievementFailureAction
  | CloseAchievementRequestAction
  | CloseAchievementSuccessAction
  | CloseAchievementFailureAction;
