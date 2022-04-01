
import { combineReducers } from "redux";
import sideContent from "./sideContent";
import filter from "./filter"

export default combineReducers({
  sideContent,
  filter
});