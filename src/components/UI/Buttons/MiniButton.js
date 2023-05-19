const MiniButton = (props) => {
  return (
    <button
      type={props.type || "button"}
      className="mini_btn"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default MiniButton;
