import GPSButton from './GPSButton';
import { useSelector, useDispatch } from 'react-redux';

const GPSButtonContainer = (props) => {
  const dispatch = useDispatch();
  const { isGPSActivated } = useSelector((state) => state.gps);
  const GPSButtonHandler = () => {
    if (isGPSActivated) {
      dispatch({ type: 'DEACTIVATE_GPS' });
    } else {
      dispatch({ type: 'ACTIVATE_GPS' });
    }
  };

  return <GPSButton isGPSActivated={isGPSActivated} GPSHandler={GPSButtonHandler}/>;
};

export default GPSButtonContainer;
