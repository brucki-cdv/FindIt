import style from "./Home.module.css";
import Sidebar from "../Layout/Sidebar";
import SideContentReports from "../Components/SideContentReports";

const Home = (props) => {
  return (
    <div className={style.mainContainer}>
      <Sidebar />
      <div className={style.content}>
        <SideContentReports />
      </div>
    </div>
  );
};

export default Home;
