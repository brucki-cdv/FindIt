import style from "./ModalHeader.module.css";

const ModalHeader = (props) => {
    return (
        <div className={style.modalHeader}>
            {props.children}
        </div>
    )
}

export default ModalHeader;