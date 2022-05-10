import style from "./SideContentHeader.module.css";
import { useSelector } from "react-redux";
const SideContentHeader = (props) => {
  const { isFilterExpanded } = useSelector((state) => state.filter);
  return (
    <div
      className={`${style.sideContentHeader} ${isFilterExpanded && style.sideContentHeaderExpand}`}
    >
      {props.children}
    </div>
  );
};

export default SideContentHeader;
