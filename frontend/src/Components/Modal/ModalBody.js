import style from "./ModalBody.module.css";

const ModalBody = (props) => {
  return <div className={style.modalBody}>{props.children}</div>;
};

export default ModalBody;
