import style from "./Sidebar.module.css";
import LogoButton from "../../Components/LogoButton";

import { FaMap, FaClipboardList, FaSignOutAlt, FaLessThanEqual } from "react-icons/fa";
import { BsPersonCircle, BsFillPinMapFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { flushSync } from "react-dom";

const Sidebar = (props) => {
  
  const [isActive, setIsActive] = useState({
    map: true,
    allReports: false,
    userReports: false,
    nearestReports: false,
    profile: false,
    signOut: false
  })

  const dispatch = useDispatch();  
  const dispatchHandler = (data) => {
    dispatch({type: "SIDEBAR_BUTTON_CLICK", payload: data})
  }

  const onMapClickHandler = () => {
    dispatch({type: "MAP_ACTIVE"})
    setIsActive({ map: true})
  }

  const onAllReportsClickHandler = () => {
    dispatch({type: "ALL_REPORTS_ACTIVE"})
    setIsActive({allReports: true})
  }

  const  onUserReportsClickHandler = () => {
    dispatch({type: "USER_REPORTS_ACTIVE"})
    setIsActive({ userReports: true})
  }

  const onNearestReportClickHandler = () => {
    dispatch({type: "NEAREST_REPORTS_ACTIVE"})
    setIsActive({nearestReports: true})
  }

  return (
    <nav className={style.sidebarContainer}>
      <LogoButton buttonName="map" onClick={onMapClickHandler} isActive={isActive.map}>
        <FaMap />
      </LogoButton>
      <LogoButton buttonName="allReports" onClick={onAllReportsClickHandler} isActive={isActive.allReports}>
        <FaClipboardList />
      </LogoButton>
      <LogoButton buttonName="userReports" onClick={onUserReportsClickHandler} isActive={isActive.userReports}>
        <MdDashboard />
      </LogoButton>
      <LogoButton buttonName="nearestReports" onClick={onNearestReportClickHandler} isActive={isActive.nearestReports}>
        <BsFillPinMapFill />
      </LogoButton>
      <div className={style.controls}>
        <LogoButton buttonName="profile" onClick={() => dispatchHandler("profile")} isActive={isActive.profile}>
          <BsPersonCircle />
        </LogoButton>
        <LogoButton buttonName="singOut" onClick={() => dispatchHandler("singOut")} isActive={isActive.singOut}>
          <FaSignOutAlt />
        </LogoButton>
      </div>
    </nav>
  );
};

export default Sidebar;
