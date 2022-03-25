import style from "./Wrapper.module.css";

const Wrapper = (props) => {
  return (
    <div className={style.wrapper} style={props.style}>
      {props.children}
    </div>
  );
};

export default Wrapper;
