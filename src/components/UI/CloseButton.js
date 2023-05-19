import { FaTimes } from "react-icons/fa";

function CloseButton(props) {
  const btnClasses = `close_btn ${props.className || ""}`;

  return (
    <button type="button" className={btnClasses} onClick={props.onClick}>
      <FaTimes />
    </button>
  );
}

export default CloseButton;
