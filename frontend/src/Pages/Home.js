import style from "./Home.module.css";
import Sidebar from "../Layout/Sidebar";
import SideContentReports from "../Components/SideContentReports";
import MapBox from "../Components/MapBox";
import AddInformation from "../Components/AddInformation";

import {useSelector} from 'react-redux';

const Home = (props) => {

  const {isModalOpen} = useSelector(state => state.modal);

  return (
    <div className={style.mainContainer}>
      <Sidebar />
      <div className={style.content}>
        <SideContentReports />
        <MapBox />
        {isModalOpen && <AddInformation />}
      </div>
    </div>
  );
};

export default Home;
