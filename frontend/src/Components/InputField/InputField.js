import style from "./InputField.module.css";

const InputField = (props) => {
  return (
    <div className={style.inputField}>
        <label for={props.name}>{props.label}</label>
      <input type={props.type} name={props.name} placeholder={props.placeholder}/>
    </div>
  );
};

export default InputField;
