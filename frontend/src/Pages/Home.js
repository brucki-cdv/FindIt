import style from "./Home.module.css";
import Sidebar from "../Layout/Sidebar";
import SideContentReports from "../Components/SideContentReports";
import MapBox from "../Components/MapBox";
import AddInformation from "../Components/AddInformation";

const Home = (props) => {
  return (
    <div className={style.mainContainer}>
      <Sidebar />
      <div className={style.content}>
        <SideContentReports />
        <MapBox />
        <AddInformation />
      </div>
    </div>
  );
};

export default Home;
