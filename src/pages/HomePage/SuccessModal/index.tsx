// import Modal from "react-modal";
/* import {
  ModalHeader,
  Divider,
  ModalText,
  SubmitButton,
} from "@/components/Styled"; */
import {
  ModalHeader,
  Divider,
  ModalText,
  SubmitButton,
} from "../../../components/Styled";
import {Modal} from 'antd';

type RequestModalProps = {
  isOpen: boolean;
  onSubmit: () => void;
};

const SuccessModal = ({ isOpen, onSubmit }: RequestModalProps) => {
  return (
    <Modal
      data-testid="success-modal"
      visible={isOpen}
      maskClosable={false}
      closable={false}
      footer={null}
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
