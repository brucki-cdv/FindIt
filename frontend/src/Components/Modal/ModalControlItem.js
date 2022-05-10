import style from "./ModalControlItem.module.css";

const ModalControlItem = (props) => {
  return (
    <div
      className={`${style.modalControlItem} ${
        props.disabled && style.modalControlItemDisabled
      }`}
      onClick={!props.disabled && props.onClick}
    >
      <span>{props.children}</span>
    </div>
  );
};

export default ModalControlItem;
