import {
  OPEN_FILTERS,
  CLOSE_FILTERS,
  UPDATE_HASREWARD_VALUE,
  UPDATE_TYPE_VALUE,
  UPDATE_DISTANCE_VALUE,
  UPDATE_SEARCHBAR_VALUE,
} from "../Constants/filerConstants";

const initialState = {
  isFilterExpanded: false,
  searchbarValue: null,
  hasRewardValue: null,
  typeValue: null,
  distanceValue: null,
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
    case UPDATE_HASREWARD_VALUE:
      return {
        ...state,
        hasReward: payload,
      };
    case UPDATE_SEARCHBAR_VALUE:
      return { ...state, searchbarValue: payload };
    case UPDATE_DISTANCE_VALUE:
      return { ...state, searchbarValue: payload };
    case UPDATE_TYPE_VALUE:
      return { ...state, searchbarValue: payload};
    case UPDATE_SEARCHBAR_VALUE:
      return { ...state, searchbarValue: payload };
    default:
      return state;
  }
}
