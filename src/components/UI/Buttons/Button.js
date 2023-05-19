const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className="button"
      onClick={props.onClick}
      disabled={props.disabled || false}
      title={props.title}
    >
      {props.children}
    </button>
  );
};

export default Button;
