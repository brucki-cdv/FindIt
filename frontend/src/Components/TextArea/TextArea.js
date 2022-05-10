import style from "./TextArea.module.css";

const TextArea = (props) => {
  return (
    <div className={style.textArea}>
      <label for={props.name}>{props.label}</label>
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.onChange}
        value={props.value}
      >
        {props.placeholder}
      </textarea>
    </div>
  );
};

export default TextArea;
