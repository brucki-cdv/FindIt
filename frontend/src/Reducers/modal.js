import {
  MODAL_CLOSE,
  ADD_INFORMATION_OPEN,
  EDIT_INFORMATION_OPEN,
  SHOW_INFORMATION_OPEN,
  CREATE_REPORT_OPEN,
  SLIDESHOW_OPEN,
  EDIT_USER_PROFILE_OPEN,
} from "../Constants/modalConstants";

const initialState = {
  isAddInformationOpen: false,
  isEditInformationOpen: false,
  isShowInformationOpen: false,
  isCreateReportOpen: false,
  isSlideshowOpen: false,
  isModalOpen: false,
  isEditUserProfileOpen: true,
  modalName: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_INFORMATION_OPEN:
      return {
        isAddInformationOpen: true,
      };
    case SHOW_INFORMATION_OPEN:
      return {
        isShowInformationOpen: true,
      };
    case EDIT_INFORMATION_OPEN:
      return {
        isEditInformationOpen: true,
      };
    case CREATE_REPORT_OPEN:
      return {
        isCreateReportOpen: true,
      };
    case SLIDESHOW_OPEN:
      return {
        isSlideshowOpen: true,
      };
    case EDIT_USER_PROFILE_OPEN:
      return {
        isEditUserProfileOpen: true,
      };
    case MODAL_CLOSE:
      return {
        isAddInformationOpen: false,
        isEditInformationOpen: false,
        isShowInformationOpen: false,
        isCreateReportOpen: false,
        isEditUserProfileOpen: false,
        isModalOpen: false,
        isSlideShowOpen: false,
      };
    default:
      return state;
  }
}
