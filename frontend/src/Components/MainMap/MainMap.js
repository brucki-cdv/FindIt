import style from "./MainMap.module.css";
import MainMapWrapper from "./MainMapWrapper";
import GPSButtonContainer from "../Buttons/GPSButton/GPSButtonContainer";
import CreateReportButton from "../Buttons/CreateReportButton";
import MapCard from "../MapCard";
import { useDelayUnmount } from "../../Hooks/useDelayUnmount";

import Map, { Marker } from "react-map-gl";
import { useSelector, useDispatch } from "react-redux";

const MainMap = ({ init, locations }) => {
  const { isGPSActivated, longitude, latitude } = useSelector(
    (state) => state.gps
  );
  const { isMapCardOpen } = useSelector((state) => state.sideContent);
  const showMapCard = useDelayUnmount(isMapCardOpen, 450);
  const dispatch = useDispatch();

  return (
    <MainMapWrapper>
      <Map
        {...init.viewPort}
        mapboxAccessToken="pk.eyJ1IjoiYmFydGVramVzdGVtIiwiYSI6ImNsMWF5dGI1cjAzYjkzZGw1dDhya2tpMTQifQ.wsEI0FtuW4stiEeVQx8lpQ"
        mapStyle="mapbox://styles/bartekjestem/cl1azlx5y001014p4teuddq9f"
        onMove={(evt) => init.setViewPort(evt.viewState)}
      >
        {locations.map((location) => {
          return (
            <Marker
              longitude={location.ReportLocation.longitude}
              latitude={location.ReportLocation.latitude}
            >
              <div
                className={`${style.blob} ${style.red}`}
                onClick={() => init.onMarkerClick(location.id)}
              ></div>
            </Marker>
          );
        })}

        {isGPSActivated && (
          <Marker longitude={longitude} latitude={latitude}>
            <div
              className={`${style.blob} ${style.blue} ${style.withRadius}`}
            ></div>
          </Marker>
        )}
      </Map>
      <div className={style.mainMapButtons}>
        <CreateReportButton onClick={() => dispatch({type: "CREATE_REPORT_OPEN"})}/>
        <GPSButtonContainer />
      </div>

      {showMapCard && <MapCard />}
    </MainMapWrapper>
  );
};

export default MainMap;
