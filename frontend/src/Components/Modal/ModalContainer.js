import style from "./ModalContainer.module.css";

const ModalContainer = (props) => {
  return <div className={style.modalContainer}>{props.children}</div>;
};

export default ModalContainer;
