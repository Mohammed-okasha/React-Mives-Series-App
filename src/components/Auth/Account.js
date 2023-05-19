import Modal from "../UI/Modal/Modal";
import Card from "../UI/Card";
import Button from "../UI/Buttons/Button";
import { FaUser } from "react-icons/fa";
import Spinner from "../UI/Loaders/Spinner";

const Account = (props) => {
  return (
    <Modal onCloseModal={props.onCloseModal}>
      <Card>
        <div className="user_account">
          <div className="icon">
            <FaUser />
          </div>
          <h4 className="email">{props.userEmail}</h4>
          <Button onClick={props.onSignOut}>
            {!props.isLoading ? "sign out" : <Spinner />}
          </Button>
        </div>
      </Card>
    </Modal>
  );
};

export default Account;
