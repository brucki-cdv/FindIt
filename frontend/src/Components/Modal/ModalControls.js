import style from "./ModalControls.module.css";

const ModalControls = (props) => {
  return <div className={style.modalControls}>{props.children}</div>;
};

export default ModalControls;
