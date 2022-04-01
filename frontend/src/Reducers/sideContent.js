import {
  SIDECONTENT_OPEN,
  SIDECONTENT_CLOSE,
  REPORTCARD_CLICK,
  MAPCARD_CLOSE,
  MAPCARD_OPTIONS_EXPAND,
  MAPCARD_OPTIONS_CLOSE,
  SIDEBAR_BUTTON_CLICK,
} from "../Constants/sideContentConstants";

const initialState = {
  clickedButton: "allReports",
  isSideContentOpen: false,
  isReportCardClicked: false,
  isMapCardOpen: false,
  isMapCardOptionsExpanded: false,
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
    case REPORTCARD_CLICK:
      return {
        isReportCardClicked: true,
        reportId: payload.reportId,
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

    default:
      return state;
  }
}
