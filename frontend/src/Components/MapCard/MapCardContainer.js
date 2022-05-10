import MapCard from "./MapCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const MapCardContainer = (props) => {
  const [report, setReport] = useState([]);
  const fetchReport = () => {
    axios.get("http://127.0.0.1:8000/api/v1/report/1").then((val) => {
      setReport(val.data.report);
    });
  };

  useEffect(() => {
    fetchReport();
  }, []);

  return <MapCard />;
};

export default MapCardContainer;
