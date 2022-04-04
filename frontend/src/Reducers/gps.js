import { ACTIVATE_GPS, DEACTIVATE_GPS } from '../Constants/gpsConstants';

const initialState = {
  isGPSActivated: true,
  latitude: null,
  longitude: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case ACTIVATE_GPS:
      return { isGPSActivated: true };
    case DEACTIVATE_GPS:
      return { isGPSActivated: false };
    default:
      return state;
  }
}
