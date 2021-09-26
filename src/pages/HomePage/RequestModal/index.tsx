import {
  ModalHeader,
  Divider,
  SubmitButton,
  ErrorMessage,
} from "../../../components/Styled";
import { Form, Input, Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const FormItem = Form.Item;
const FormItemStyle = {
  marginTop: "2rem",
};

type RequestModalProps = {
  isOpen: boolean;
  onSubmit: (formData: FormDataType) => void;
  onClose: () => void;
  loading: boolean;
  errorMessage: string;
};

const RequestModal = ({
  isOpen,
  onSubmit,
  onClose,
  loading,
  errorMessage,
}: RequestModalProps) => {
  return (
    <Modal
      data-testid="request-modal"
      visible={isOpen}
      onCancel={onClose}
      maskClosable={false}
      destroyOnClose={true}
      closeIcon={<CloseOutlined data-testid="close-icon" />}
      footer={null}
      style={{ textAlign: "center" }}
    >
      <ModalHeader>Request an invite</ModalHeader>
      <Divider></Divider>
      <Form
        data-testid="request-form"
        onFinish={(values) => {
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
              message: "Please enter your full name.",
            },
          ]}
          style={FormItemStyle}
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
              message: "The input is not valid E-mail.",
            },
            {
              required: true,
              message: "Please enter your E-mail.",
            },
          ]}
          style={FormItemStyle}
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
              message: "Please confirm your E-mail address.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("email") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "The two E-mail addresses that you entered do not match."
                  )
                );
              },
            }),
          ]}
          style={FormItemStyle}
        >
          <Input
            placeholder="Confirm email"
            style={{ width: "80%", fontSize: "2rem" }}
          ></Input>
        </FormItem>
        <FormItem>
          <SubmitButton
            htmlType="submit"
            loading={loading}
            disabled={loading}
          >
            {loading ? "Sending, please wait." : "Send"}
          </SubmitButton>
        </FormItem>
        <FormItem>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default RequestModal;
