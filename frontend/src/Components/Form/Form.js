const Form = (props) => {
  return (
    <form
      onSubmit={props.onSubmit}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {props.children}
    </form>
  );
};

export default Form;
