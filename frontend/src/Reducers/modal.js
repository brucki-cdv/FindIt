import { MODAL_OPEN, MODAL_CLOSE } from '../Constants/modalConstants';

const initialState = {
  isModalOpen: false,
  modalName: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case MODAL_OPEN:
      return {
        isModalOpen: true,
      };
    case MODAL_CLOSE:
      return {
        isModalOpen: false,
      };
    default:
      return state;
  }
}
