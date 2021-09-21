import Modal from "react-modal";
import {
  ModalHeader,
  Divider,
  ModalText,
  SubmitButton,
} from "@/components/Styled";

type RequestModalProps = {
  isOpen: boolean;
};

Modal.setAppElement("#root");
const SuccessModal = ({ isOpen }: RequestModalProps) => {
  return (
    <Modal isOpen={isOpen} className="Modal" overlayClassName="Overlay">
      <ModalHeader>All done!</ModalHeader>
      <Divider></Divider>
      <ModalText>
        <div>You will be one of the first to experience</div>
        <div>Broccoli &amp; Co. when we launch.</div>
      </ModalText>
      <SubmitButton>OK</SubmitButton>
    </Modal>
  );
};

export default SuccessModal;
