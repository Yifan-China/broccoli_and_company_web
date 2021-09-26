import {
  ModalHeader,
  Divider,
  ModalText,
  SubmitButton,
} from "../../../components/Styled";
import { Modal } from "antd";

type RequestModalProps = {
  isOpen: boolean;
  onOk: () => void;
};

const SuccessModal = ({ isOpen, onOk }: RequestModalProps) => {
  return (
    <Modal
      data-testid="success-modal"
      visible={isOpen}
      maskClosable={false}
      closable={false}
      footer={null}
      style={{ textAlign: "center" }}
    >
      <ModalHeader>All done!</ModalHeader>
      <Divider></Divider>
      <ModalText>
        <div>You will be one of the first to experience</div>
        <div>Broccoli &amp; Co. when we launch.</div>
      </ModalText>
      <SubmitButton onClick={onOk} style={{ marginBottom: "2rem" }}>
        OK
      </SubmitButton>
    </Modal>
  );
};

export default SuccessModal;
