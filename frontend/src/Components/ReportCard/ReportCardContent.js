import style from "./ReportCardContent.module.css";

const ReportCardContent = (props) => {
    return (
       <div className={style.reportCardContent}>
           {props.children}
       </div>
    )
}

export default ReportCardContent;