import MainMap from "./MainMap";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const MainMapContainer = (props) => {
  const dispatch = useDispatch();
  const { isGPSActivated, latitude, longitude } = useSelector(
    (state) => state.gps
  );
  const [locations, setLocations] = useState([]);
  const [viewPort, setViewPort] = useState({
    latitude: latitude,
    longitude: longitude,
    width: "100%",
    height: "100%",
    zoom: 20,
  });

  const onMarkerClick = (id) => {
    dispatch({ type: "REPORTCARD_CLICK", payload: id });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/report/location")
      .then((value) => {
        setLocations(value.data.reportsLocation);
      })
      .catch((err) => {
        console.log(err);
      });

    setViewPort((prevState) => {
      return {
        ...prevState,
        latitude: latitude,
        longitude: longitude,
      };
    });
  }, [longitude, latitude]);

  const init = {
    viewPort,
    setViewPort,
    onMarkerClick,
  };

  return <MainMap init={init} locations={locations} />;
};

export default MainMapContainer;
