import Modal from "../UI/Modal/Modal";
import Card from "../UI/Card";
import Button from "../UI/Buttons/Button";
import Spinner from "../UI/Loaders/Spinner";
import { FaExclamation } from "react-icons/fa";

const ConfirmModal = (props) => {
  return (
    <Modal onCloseModal={props.onCloseConfirm}>
      <Card>
        <div className="confirm_content">
          <div className="icon">
            <FaExclamation fontSize="2rem" />
          </div>
          <p className="message">{props.massage}</p>
          <Button onClick={props.onRemove}>
            {!props.loading && props.btnLabel}
            {props.loading && <Spinner />}
          </Button>
        </div>
      </Card>
    </Modal>
  );
};

export default ConfirmModal;
