import style from "./SlideshowClose.module.css";

import { AiOutlineClose } from "react-icons/ai";

export default function SlideshowClose({onClick}) {
  return (
    <button className={style.slideshowClose} onClick={onClick}>
      <AiOutlineClose size={18} />
    </button>
  );
}
