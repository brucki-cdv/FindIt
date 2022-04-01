import style from "./ModalBackdrop.module.css";

const ModalBackdrop = (props) => {
    return (
        <div className={style.modalBackdrop}>
            {props.children}
        </div>
    )
}

export default ModalBackdrop;