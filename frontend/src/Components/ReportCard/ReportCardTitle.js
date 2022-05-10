import style from "./ReportCardTitle.module.css";

const ReportCardTitle = (props) => {
    return (
        <span className={style.reportCardTitle}>{props.children}</span>
    )
}

export default ReportCardTitle;