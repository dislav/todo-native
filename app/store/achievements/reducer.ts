import { combineReducers } from 'redux';
import {
  AchievementsActionTypes,
  AchievementsState,
  CLOSE_ACHIEVEMENT_FAILURE,
  CLOSE_ACHIEVEMENT_REQUEST,
  CLOSE_ACHIEVEMENT_SUCCESS,
  SET_ACHIEVEMENTS,
  UPDATE_ACHIEVEMENT_FAILURE,
  UPDATE_ACHIEVEMENT_REQUEST,
  UPDATE_ACHIEVEMENT_SUCCESS,
} from './types';

const initialState: AchievementsState = {
  achievementsStatus: {
    status: 'idle',
    error: null,
  },
  text: '',
  count: 0,
  open: false,
};

const achievementsStatus = (
  state = initialState.achievementsStatus,
  action: AchievementsActionTypes
) => {
  switch (action.type) {
    case UPDATE_ACHIEVEMENT_REQUEST || CLOSE_ACHIEVEMENT_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case UPDATE_ACHIEVEMENT_SUCCESS || CLOSE_ACHIEVEMENT_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
      };
    case UPDATE_ACHIEVEMENT_FAILURE || CLOSE_ACHIEVEMENT_FAILURE:
      return {
        status: 'failed',
        error: action.payload,
      };
    default:
      return state;
  }
};

const text = (state = initialState.text, action: AchievementsActionTypes) => {
  switch (action.type) {
    case SET_ACHIEVEMENTS:
      return action.payload.text;
    case UPDATE_ACHIEVEMENT_SUCCESS:
      return action.payload.text;
    default:
      return state;
  }
};

const count = (state = initialState.count, action: AchievementsActionTypes) => {
  switch (action.type) {
    case SET_ACHIEVEMENTS:
      return action.payload.count;
    case UPDATE_ACHIEVEMENT_SUCCESS:
      return state + 1;
    default:
      return state;
  }
};

const open = (state = initialState.open, action: AchievementsActionTypes) => {
  switch (action.type) {
    case SET_ACHIEVEMENTS:
      return action.payload.open;
    case UPDATE_ACHIEVEMENT_SUCCESS:
      return action.payload.open;
    case CLOSE_ACHIEVEMENT_SUCCESS:
      return action.payload.open;
    default:
      return state;
  }
};

export default combineReducers({
  achievementsStatus,
  text,
  count,
  open,
});
