import style from "./SubmitButton.module.css";

const SubmitButton = (props) => {
  return (
    <div className={style.submitButton}>
      <button className={style.submitButtonText} type="submit">
        {props.name}
      </button>
    </div>
  );
};

export default SubmitButton;
