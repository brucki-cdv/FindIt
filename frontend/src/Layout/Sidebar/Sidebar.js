import style from "./Sidebar.module.css";
import LogoButton from "../../Components/LogoButton";
import { FaMap, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { BsPersonCircle, BsFillPinMapFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

const Sidebar = (props) => {
  return (
    <nav className={style.sidebarContainer}>
      <LogoButton className="dupa">
        <FaMap />
      </LogoButton>
      <LogoButton>
        <FaClipboardList />
      </LogoButton>
      <LogoButton>
        <MdDashboard />
      </LogoButton>
      <LogoButton>
        <BsFillPinMapFill />
      </LogoButton>
      <div className={style.controls}>
        <LogoButton>
          <BsPersonCircle />
        </LogoButton>
        <LogoButton>
          <FaSignOutAlt />
        </LogoButton>
      </div>
    </nav>
  );
};

export default Sidebar;
