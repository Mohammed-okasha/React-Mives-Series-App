import MiniButton from "../Buttons/MiniButton";
import { FaTimes } from "react-icons/fa";

const ModalBox = (props) => {
  return (
    <div className="modal_box">
      {props.children}
      <MiniButton onClick={props.onClose}>
        <FaTimes />
      </MiniButton>
    </div>
  );
};

export default ModalBox;
