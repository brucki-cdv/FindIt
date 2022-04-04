import style from './GPSButton.module.css';
import { MdGpsNotFixed, MdGpsFixed } from 'react-icons/md';
const GPSButton = ({isGPSActivated, GPSHandler}) => {

    return (
    <div onClick={GPSHandler} className={`${style.gpsButton} ${isGPSActivated && style.gpsButtonActivated}`}>
        {isGPSActivated ? <MdGpsFixed /> : <MdGpsNotFixed />}
    </div>
  );
};

export default GPSButton;
