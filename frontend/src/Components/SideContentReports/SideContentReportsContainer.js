import SideContentReports from "./SideContentReports";
import dataService from "../../Services/data.service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SideContentReportsContainer = (props) => {
  const [reports, setReports] = useState({});
  const dispatch = useDispatch();
  const { isFilterExpanded } = useSelector((state) => state.filter);
  const onClickFilterButton = () => {
    if (isFilterExpanded) {
      dispatch({ type: "CLOSE_FILTERS" });
    } else {
      dispatch({ type: "OPEN_FILTERS" });
    }
  };

  useEffect(() => {
    let isApiSubscribed = true;
    dataService.getReports().then((val) => {
      if (isApiSubscribed) {
        setReports(val.data.reports);
      }
    });

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <SideContentReports reports={reports} onClickFilter={onClickFilterButton} />
  );
};

export default SideContentReportsContainer;
