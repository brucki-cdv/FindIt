import style from "./Sidebar.module.css";
import LogoButton from "../../Components/LogoButton";

import { FaMap, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { BsPersonCircle, BsFillPinMapFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import {useDispatch} from 'react-redux';

const Sidebar = (props) => {
  
  const dispatch = useDispatch();  
  const dispatchHandler = (data) => {
    console.log("CLICKED! ", data);
    dispatch({type: "SIDEBAR_BUTTON_CLICK", payload: data})
  }

  return (
    <nav className={style.sidebarContainer}>
      <LogoButton buttonName="map">
        <FaMap />
      </LogoButton>
      <LogoButton buttonName="allReports">
        <FaClipboardList />
      </LogoButton>
      <LogoButton buttonName="userReports">
        <MdDashboard />
      </LogoButton>
      <LogoButton buttonName="nearestReports">
        <BsFillPinMapFill />
      </LogoButton>
      <div className={style.controls}>
        <LogoButton buttonName="profile">
          <BsPersonCircle />
        </LogoButton>
        <LogoButton buttonName="singOut">
          <FaSignOutAlt />
        </LogoButton>
      </div>
    </nav>
  );
};

export default Sidebar;
