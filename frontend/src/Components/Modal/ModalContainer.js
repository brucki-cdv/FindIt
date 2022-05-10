import style from "./ModalContainer.module.css";

const ModalContainer = (props) => {
  return <div className={style.modalContainer} style={props.style}>{props.children}</div>;
};

export default ModalContainer;
