import GPSButton from "./GPSButton";
import { useSelector, useDispatch } from "react-redux";

const GPSButtonContainer = (props) => {
  const dispatch = useDispatch();
  const { isGPSActivated } = useSelector((state) => state.gps);
  const GPSButtonHandler = () => {
    if (isGPSActivated) {
      dispatch({ type: "DEACTIVATE_GPS" });
    } else {
      dispatch({ type: "ACTIVATE_GPS" });
    }
  };

  const getCurrentLocalization = () => {
    const success = (position) => {
      dispatch({
        type: "ACTIVATE_GPS",
        payload: {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        },
      });
    };

    const error = () => {
      dispatch({ type: "DEACTIVATE_GPS" });
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <GPSButton isGPSActivated={isGPSActivated} GPSHandler={GPSButtonHandler} onClick={getCurrentLocalization}/>
  );
};

export default GPSButtonContainer;
