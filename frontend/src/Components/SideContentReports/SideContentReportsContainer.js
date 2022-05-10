import SideContentReports from "./SideContentReports";
import dataService from "../../Services/data.service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SideContentReportsContainer = (props) => {
  const [reports, setReports] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { isFilterExpanded } = useSelector((state) => state.filter);

  const onClickFilterButton = () => {
    if (isFilterExpanded) {
      dispatch({ type: "CLOSE_FILTERS" });
    } else {
      dispatch({ type: "OPEN_FILTERS" });
    }
  };

  const onChangeSearchbar = (e) => {
    dispatch({ type: "UPDATE_SEARCHBAR_VALUE", payload: e.target.value });
  };

  const onChangeHasReward = (e) => {
    dispatch({ type: "UPDATE_HAS_REWARD_VALUE", payload: e });
  };

  const onChangeType = (e) => {
    dispatch({ type: "UPDATE_TYPE_VALUE", payload: e });
  };

  const onChangeDistance = (e) => {
    dispatch({ type: "UPDATE_DISTANCE_VALUE", payload: e });
  };

  useEffect(() => {
    let isApiSubscribed = true;
    dataService.getReports(20, 0).then((val) => {
      console.log(val);
      if (isApiSubscribed) {
        setReports(val.data.reports.rows);
      }
    });

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  const init = {
    onChangeSearchbar,
    onChangeHasReward,
    onChangeType,
    onChangeDistance,
    reports,
    setReports,
    hasMore,
    setHasMore,
    page,
    setPage
  };

  return <SideContentReports onClickFilter={onClickFilterButton} init={init} />;
};

export default SideContentReportsContainer;
