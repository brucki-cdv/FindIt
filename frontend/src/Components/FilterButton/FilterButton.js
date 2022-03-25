import style from "./FilterButton.module.css";
import { IoMdOptions } from "react-icons/io";

const FilterButton = (props) => {
  return (
    <div className={style.filterButton} style={props.style}>
      <div className={style.filterButtonIcon}>
        <IoMdOptions />
      </div>
    </div>
  );
};

export default FilterButton;
