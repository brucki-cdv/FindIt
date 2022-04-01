import {
  OPEN_FILTERS,
  CLOSE_FILTERS,
  SAVE_HAS_REWARD,
  SAVE_TYPE,
  SAVE_DISTANCE,
} from "../Constants/filerConstants";

const initialState = {
  isFilterExpanded: false,
  hasReward: null,
  type: null,
  distance: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case OPEN_FILTERS:
      return {
        ...state,
        isFilterExpanded: true,
      };
    case CLOSE_FILTERS:
      return { ...state, isFilterExpanded: false };
    case SAVE_HAS_REWARD:
      return {
        hasReward: payload.hasReward,
      };
    case SAVE_TYPE:
      return { type: payload.type };
    case SAVE_DISTANCE:
      return { distance: payload.distance };
    default:
      return state;
  }
}
