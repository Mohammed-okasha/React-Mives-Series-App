import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalBox from "./ModalBox";

const overlays = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onCloseModal} />,
        overlays
      )}
      {ReactDOM.createPortal(
        <ModalBox onClose={props.onCloseModal}>{props.children}</ModalBox>,
        overlays
      )}
    </>
  );
};

export default Modal;
