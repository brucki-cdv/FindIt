import style from "./ReportCardImage.module.css";

const ReportCardImage = (props) => {

  return (
    <div className={style.reportCardImage}>
      <img
        src={props.src}
      />
    </div>
  );
};

export default ReportCardImage;
