import style from "./MapBox.module.css";
import ReactMapGl from "react-map-gl";
import { useState } from "react";
import MapCard from "../MapCard";
const MapBox = (props) => {
  const [viewPort, setViewPort] = useState({
    latitude: 45.1234,
    longitude: -75.6904,
    width: "100%",
    height: "100%",
    zoom: 10,
  });

  return (
    <div className={style.mapContainer}>
      <ReactMapGl
        mapboxAccessToken="pk.eyJ1IjoiYmFydGVramVzdGVtIiwiYSI6ImNsMWF5dGI1cjAzYjkzZGw1dDhya2tpMTQifQ.wsEI0FtuW4stiEeVQx8lpQ"
        {...viewPort}
        mapStyle="mapbox://styles/bartekjestem/cl1azlx5y001014p4teuddq9f"
        height="100vh"
        onMove={(evt) => setViewPort(evt.viewState)}
      ></ReactMapGl>
      <MapCard />
    </div>
  );
};

export default MapBox;
