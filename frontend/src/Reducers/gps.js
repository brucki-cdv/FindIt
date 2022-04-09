import { ACTIVATE_GPS, DEACTIVATE_GPS } from "../Constants/gpsConstants";

const initialState = {
  isGPSActivated: false,
  latitude: 52.44263685895496,
  longitude: 16.94897278473774,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case ACTIVATE_GPS:
      return {
        isGPSActivated: true,
        latitude: payload.latitude,
        longitude: payload.longitude,
      };
    case DEACTIVATE_GPS:
      return { latitude: null, longitude: null, isGPSActivated: false };
    default:
      return state;
  }
}
