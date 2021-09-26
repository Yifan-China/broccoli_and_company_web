import {
  Title,
  SubTitle,
  RequestButton,
  CenterText,
  ContentWrapper,
} from "../../components/Styled";
import { useState } from "react";
import RequestModal from "./RequestModal";
import SuccessModal from "./SuccessModal";
import { sendInvitation } from "../../services/invite";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  const [requestOpen, setRequestOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    setRequestOpen(true);
  };

  const sendInviteRequest = async (formData: FormDataType) => {
    // remove confirm email field
    const { confirm, ...payload } = formData;
    try {
      setLoading(true);
      await sendInvitation(payload);
      setRequestOpen(false);
      setSuccessOpen(true);
    } catch (e) {
      setErrorMessage(e as string);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (formData: FormDataType) => {
    sendInviteRequest(formData);
    toast.info("An invitation request has been sent.", {
      position: "top-center",
      hideProgressBar: true,
    });
  };

  const handleCloseSuccess = () => {
    setSuccessOpen(false);
  };

  const handleCloseRequest = () => {
    setRequestOpen(false);
  };

  return (
    <ContentWrapper data-testid="homepage">
      <ToastContainer />
      <Title>
        <div>A better way</div>
        <div>to enjoy every day.</div>
      </Title>
      <SubTitle>
        <div>Be the first to know when we launch.</div>
      </SubTitle>
      <CenterText>
        <RequestButton onClick={handleClick}>Request an invite</RequestButton>
      </CenterText>
      <RequestModal
        isOpen={requestOpen}
        onSubmit={handleSubmit}
        onClose={handleCloseRequest}
        loading={loading}
        errorMessage={errorMessage}
      ></RequestModal>
      <SuccessModal
        isOpen={successOpen}
        onOk={handleCloseSuccess}
      ></SuccessModal>
    </ContentWrapper>
  );
};

export default HomePage;
