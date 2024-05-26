const ButtonC = (props) => {
  // size - large ,  small

  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      style={props.styles}
      className={"button " + props.size}>
      {props.label}
    </button>
  );
};

export default ButtonC;
