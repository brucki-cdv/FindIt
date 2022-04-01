import style from "./FilterButton.module.css";
import { IoMdOptions } from "react-icons/io";
import {useSelector} from 'react-redux';

const FilterButton = (props) => {
  
  const {isFilterExpanded} = useSelector(state => state.filter)
  
  return (
    <div
      className={`${style.filterButton} ${isFilterExpanded && style.active}`}
      style={props.style}
      onClick={props.onClick}
    >
      <div className={style.filterButtonIcon}>
        <IoMdOptions />
      </div>
    </div>
  );
};

export default FilterButton;
