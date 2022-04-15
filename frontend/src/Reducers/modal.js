import {
  MODAL_CLOSE,
  ADD_INFORMATION_OPEN,
  EDIT_INFORMATION_OPEN,
  SHOW_INFORMATION_OPEN,
} from "../Constants/modalConstants";

const initialState = {
  isAddInformationOpen: false,
  isEditInformationOpen: false,
  isShowInformationOpen: false,
  isModalOpen: false,
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
    case MODAL_CLOSE:
      return {
        isAddInformationOpen: false,
        isEditInformationOpen: false,
        isShowInformationOpen: false,
        isModalOpen: false,
      };
    default:
      return state;
  }
}
