import style from "./Searchbar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Searchbar = (props) => {
  return (
    <div className={style.searchbar}>
      <div className={style.searchbarIcon}>
        <BiSearchAlt2 />
      </div>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        style={props.style}
      />
    </div>
  );
};

export default Searchbar;
