function Button(props) {
  console.log("color", props.backgroundColor);
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        padding: "10px 5px",
        border: "1px solid #555",
        marginBottom: "1rem",
        width: "150px",
        borderRadius: "4px",
      }}
      onClick={props.handleClick}
    >
      {props.value}
    </button>
  );
}

export default Button;
