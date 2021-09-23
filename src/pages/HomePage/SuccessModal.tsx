import Modal from "react-modal";
import {
  ModalHeader,
  Divider,
  ModalText,
  SubmitButton,
} from "@/components/Styled";

type RequestModalProps = {
  isOpen: boolean;
  onSubmit: () => void;
};

Modal.setAppElement("#root");
const SuccessModal = ({ isOpen, onSubmit }: RequestModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      className="Modal"
      overlayClassName="Overlay"
    >
      <ModalHeader>All done!</ModalHeader>
      <Divider></Divider>
      <ModalText>
        <div>You will be one of the first to experience</div>
        <div>Broccoli &amp; Co. when we launch.</div>
      </ModalText>
      <SubmitButton onClick={onSubmit}>OK</SubmitButton>
    </Modal>
  );
};

export default SuccessModal;
