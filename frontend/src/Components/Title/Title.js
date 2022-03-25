import style from "./Title.module.css";

const Title = (props) => {
  return <span className={style.title} style={props.style}>{props.children}</span>;
};

export default Title;
