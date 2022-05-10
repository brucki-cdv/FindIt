import style from './GPSButton.module.css';
import { MdGpsNotFixed, MdGpsFixed } from 'react-icons/md';
const GPSButton = ({isGPSActivated, GPSHandler, onClick}) => {

    return (
    <div onClick={onClick} className={`${style.gpsButton} ${isGPSActivated && style.gpsButtonActivated}`}>
        {isGPSActivated ? <MdGpsFixed /> : <MdGpsNotFixed />}
    </div>
  );
};

export default GPSButton;
