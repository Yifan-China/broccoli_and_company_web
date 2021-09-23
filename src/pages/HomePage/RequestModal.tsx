import Modal from "react-modal";
import { ModalHeader, Divider, SubmitButton } from "@/components/Styled";
import { Form, Input } from "antd";
const FormItem = Form.Item;

type RequestModalProps = {
  isOpen: boolean;
  onSubmit: (formData: FormDataType) => void;
  onClose: () => void;
  loading: boolean;
};

Modal.setAppElement("#root");
const RequestModal = ({ isOpen, onSubmit, onClose, loading }: RequestModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={!loading}
      className="Modal"
      overlayClassName="Overlay"
    >
      <ModalHeader>Request an invite</ModalHeader>
      <Divider></Divider>
      <Form
        onFinish={(values) => {
          // TODO: fix the type
          const formData = values as FormDataType;
          onSubmit(formData);
        }}
        wrapperCol={{ span: 24 }}
        style={{
          marginTop: "3rem",
        }}
      >
        <FormItem
          name="name"
          hasFeedback={true}
          rules={[
            {
              required: true,
              message: "Please enter your full name!",
            },
          ]}
          style={{
            marginTop: "2rem",
          }}
        >
          <Input
            placeholder="Full name"
            style={{ width: "80%", fontSize: "2rem" }}
          ></Input>
        </FormItem>
        <FormItem
          name="email"
          hasFeedback={true}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please enter your E-mail!",
            },
          ]}
          style={{
            marginTop: "2rem",
          }}
        >
          <Input
            placeholder="Email"
            style={{ width: "80%", fontSize: "2rem" }}
          ></Input>
        </FormItem>
        <FormItem
          name="confirm"
          dependencies={["email"]}
          hasFeedback={true}
          rules={[
            {
              required: true,
              message: "Please confirm your E-mail address!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("email") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "The two E-mail addresses that you entered do not match!"
                  )
                );
              },
            }),
          ]}
          style={{
            marginTop: "2rem",
          }}
        >
          <Input
            placeholder="Confirm email"
            style={{ width: "80%", fontSize: "2rem" }}
          ></Input>
        </FormItem>
        <FormItem>
          <SubmitButton
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Submit
          </SubmitButton>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default RequestModal;
