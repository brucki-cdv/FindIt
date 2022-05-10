import style from "./DetailsInformation.module.css";

const DetailsInformation = (props) => {
  return (
    <li className={style.detailsInformation}>
      <span className={style.detailsInformationLogo}>{props.logo}</span>
      <span className={style.detailsInformationText}>{props.children}</span>
    </li>
  );
};

export default DetailsInformation;
