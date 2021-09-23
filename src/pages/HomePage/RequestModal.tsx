import Modal from "react-modal";
import { ModalHeader, Divider, Form, FormItem, Input, SubmitButton } from "@/components/Styled";

type RequestModalProps = {
  isOpen: boolean;
  onSubmit: (formData: FormDataType) => void;
};

Modal.setAppElement("#root");
const RequestModal = ({ isOpen, onSubmit }: RequestModalProps) => {
  return (
    <Modal isOpen={isOpen} className="Modal" overlayClassName="Overlay">
      <ModalHeader>Request an invite</ModalHeader>
      <Divider></Divider>
      <Form 
        onFinish={(values) => {
          // TODO: fix the type
          const formData = values as FormDataType;
          onSubmit(formData);
        }}
        wrapperCol={{ span: 24 }}
      >
        <FormItem name="name">
          <Input placeholder="Full name"></Input>
        </FormItem>
        <FormItem name="email">
          <Input placeholder="Email"></Input>
        </FormItem>
        <FormItem>
          <Input placeholder="Confirm email"></Input>
        </FormItem>
        <FormItem>
          <SubmitButton type="primary" htmlType="submit">
            Submit
          </SubmitButton>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default RequestModal;
