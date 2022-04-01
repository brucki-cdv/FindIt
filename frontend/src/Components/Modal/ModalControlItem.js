import style from "./ModalControlItem.module.css";

const ModalControlItem = (props) => {
  return <div className={style.modalControlItem}>{props.children}</div>;
};

export default ModalControlItem;
