import style from "./Home.module.css";
import Sidebar from "../Layout/Sidebar";
import SideContentReports from "../Components/SideContentReports";
import MainMap from "../Components/MainMap";
import AddInformation from "../Components/AddInformation";
import {useDelayUnmount} from "../Hooks/useDelayUnmount";

import {useSelector} from 'react-redux';

const Home = (props) => {

  
  const {isModalOpen} = useSelector(state => state.modal);
  const {isAllReportsActive} = useSelector(state => state.sideContent);

  const showAllReports = useDelayUnmount(isAllReportsActive, 450)
  return (
    <div className={style.mainContainer}>
      <Sidebar />
      <div className={style.content}>
        
        {showAllReports && <SideContentReports />}
        <MainMap />
        {isModalOpen && <AddInformation />}
      </div>
    </div>
  );
};

export default Home;
