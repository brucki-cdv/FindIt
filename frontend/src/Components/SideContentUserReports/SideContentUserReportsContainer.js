import SideContentUserReports from "./SideContentUserReports";
import dataService from "../../Services/data.service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SideContentUserReportsContainer = (props) => {
  const [userReports, setUserReports] = useState([]);
  const dispatch = useDispatch();
  const { isFilterExpanded } = useSelector((state) => state.filter);
  const { userId } = useSelector((state) => state.auth);

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
    dataService.getUserReports('anowak@gmail.com').then((val) => {
      if (isApiSubscribed) {
        setUserReports(val.data.userReport);
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
    userReports,
  };

  return (
    <SideContentUserReports onClickFilter={onClickFilterButton} init={init} />
  );
};

export default SideContentUserReportsContainer;
