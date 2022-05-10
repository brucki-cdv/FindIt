import style from "./SlideshowDelete.module.css";

import { BsTrash } from "react-icons/bs";

export default function SlideshowDelete({onClick}) {
  return (
    <button className={style.slideshowDelete} onClick={onClick}>
      <BsTrash size={18} />
    </button>
  );
}
