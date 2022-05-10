import style from "./SideContent.module.css";
import SideContentHeader from "./SideContentHeader";
import SideContentBody from "./SideContentBody";

const SideContent = (props) => {
  return (
    <div className={style.sideContent}>
      <SideContentHeader />
      <SideContentBody />
    </div>
  );
};

export default SideContent;
