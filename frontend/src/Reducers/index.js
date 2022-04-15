import { combineReducers } from "redux";
import sideContent from "./sideContent";
import filter from "./filter";
import modal from "./modal";
import gps from "./gps";
import auth from "./auth";

export default combineReducers({
  sideContent,
  filter,
  modal,
  gps,
  auth,
});
