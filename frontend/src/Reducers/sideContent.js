import {
  SIDECONTENT_OPEN,
  SIDECONTENT_CLOSE,
  REPORTCARD_CLICK,
  MAPCARD_CLOSE,
  MAPCARD_OPTIONS_EXPAND,
  MAPCARD_OPTIONS_CLOSE,
  SIDEBAR_BUTTON_CLICK,
  MAP_ACTIVE,
  ALL_REPORTS_ACTIVE,
  USER_PROFILE_ACTIVE,
  USER_REPORTS_ACTIVE,
  NEAREST_REPORTS_ACTIVE,
  DETAILS_ACTIVATED,
  DETAILS_DEACTIVATED,
  MARKER_CLICK
} from "../Constants/sideContentConstants";

const initialState = {
  clickedButton: "allReports",
  isAllReportsActive: false,
  isUserReportsActive: false,
  isMapActive: false,
  isUserProfileActive: false,
  isNearestReportsActive: false,
  isSideContentOpen: false,
  isReportCardClicked: false,
  isMapCardOptionsExpanded: false,
  isDetailsActivated: false,
  reportId: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case SIDECONTENT_OPEN:
      return {
        isSideContentOpen: true,
      };
    case SIDECONTENT_CLOSE:
      return {
        isSideContentOpen: false,
      };
    case MARKER_CLICK:
      return {
        ...state,
        isDetailsActivated: true,
        isAllReportsActive: true,
        reportId: payload,
      };
    case MAPCARD_CLOSE:
      return {
        isMapCardOpen: false,
        isReportCardClicked: false,
        reportId: null,
      };
    case MAPCARD_OPTIONS_EXPAND:
      return {
        ...state,
        isMapCardOptionsExpanded: true,
      };
    case MAPCARD_OPTIONS_CLOSE:
      return {
        ...state,
        isMapCardOptionsExpanded: false,
      };
    case SIDEBAR_BUTTON_CLICK:
      return {
        ...state,
        clickedButton: payload,
      };
    case MAP_ACTIVE:
      return {
        ...state,
        isAllReportsActive: false,
        isUserReportsActive: false,
        isUserProfileActive: false,
        isMapActive: true,
        isNearestReportsActive: false,
        isDetailsActivated: false,
      };
    case ALL_REPORTS_ACTIVE:
      return {
        ...state,
        isAllReportsActive: true,
        isUserReportsActive: false,
        isUserProfileActive: false,
        isMapActive: false,
        isNearestReportsActive: false,
        isDetailsActivated: false,
      };
    case USER_REPORTS_ACTIVE:
      return {
        ...state,
        isAllReportsActive: false,
        isUserProfileActive: false,
        isUserReportsActive: true,
        isMapActive: false,
        isNearestReportsActive: false,
        isDetailsActivated: false,
      };
    case NEAREST_REPORTS_ACTIVE:
      return {
        ...state,
        isAllReportsActive: false,
        isUserProfileActive: false,
        isUserReportsActive: false,
        isMapActive: false,
        isNearestReportsActive: true,
        isDetailsActivated: false,
      };
      case USER_PROFILE_ACTIVE:
        return {
          ...state,
          isAllReportsActive: false,
          isUserProfileActive: true,
          isUserReportsActive: false,
          isMapActive: false,
          isNearestReportsActive: false,
          isDetailsActivated: false,
        }

    case DETAILS_ACTIVATED:
      return {
        ...state,
        isDetailsActivated: true,
        reportId: payload
      }

    case DETAILS_DEACTIVATED:
      return {
        ...state,
        isDetailsActivated: false,
        reportId: null
      }
    default:
      return state;
  }
}
