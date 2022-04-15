import style from "./Home.module.css";
import Sidebar from "../Layout/Sidebar";
import SideContentReports from "../Components/SideContentReports";
import SideContentUserReport from "../Components/SideContentUserReports";
import SideContentUserProfile from "../Components/SideContentUserProfile";
import MainMap from "../Components/MainMap";
import AddInformation from "../Components/AddInformation";
import ShowInformation from "../Components/ShowInformation";
import EditInformation from "../Components/EditInformation";


import SlideShow from "../Components/SlideShow";
import { useDelayUnmount } from "../Hooks/useDelayUnmount";

import { useSelector } from "react-redux";

const Home = (props) => {
  const { isEditInformationOpen, isShowInformationOpen, isAddInformationOpen } =
    useSelector((state) => state.modal);
  const { userId } = useSelector((state) => state.auth);
  console.log(userId);
  const { isAllReportsActive, isUserReportsActive, isUserProfileActive } = useSelector(
    (state) => state.sideContent
  );

  const showAllReports = useDelayUnmount(isAllReportsActive, 450);
  const showUserReports = useDelayUnmount(isUserReportsActive, 450);
  const showUserProfile = useDelayUnmount(isUserProfileActive, 450);

  return (
    <div className={style.mainContainer}>
      <Sidebar />
      <div className={style.content}>
        {showAllReports && <SideContentReports />}
        {showUserReports && <SideContentUserReport />}
        {showUserProfile && <SideContentUserProfile />}
        <MainMap />
        {isShowInformationOpen && <ShowInformation />}
        {isEditInformationOpen && <EditInformation />}
        {isAddInformationOpen && <AddInformation />}
        {/* <SlideShow /> */}
      </div>
    </div>
  );
};

export default Home;
