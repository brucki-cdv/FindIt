import style from "./ModalTitle.module.css";

const ModalTitle = (props) => {
  return <span className={style.modalTitle}>{props.children}</span>;
};

export default ModalTitle;
