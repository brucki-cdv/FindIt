import style from "./DetailsImage.module.css";
import { MdVisibility } from "react-icons/md";
import { useState } from "react";

const DetailImage = ({onClick, children}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      {isHovered && (
        <div className={style.detailsImageIcon}>
          <MdVisibility size={25} color="black" />
        </div>
      )}
      <div
        className={style.detailsImage}
        onMouseEnter={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default DetailImage;
