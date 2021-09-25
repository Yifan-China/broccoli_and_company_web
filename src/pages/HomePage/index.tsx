/* import {
  Title,
  SubTitle,
  InviteButton,
  CenterText,
  ContentWrapper,
} from "@/components/Styled"; */

import {
  Title,
  SubTitle,
  RequestButton,
  CenterText,
  ContentWrapper,
} from "../../components/Styled";
import { useState } from "react";
// import RequestModal from "@/pages/HomePage/RequestModal";
import RequestModal from "./RequestModal";
// import SuccessModal from "@/pages/HomePage/SuccessModal";
import SuccessModal from "./SuccessModal";
// import { sendInvitation } from "@/services/invite";
import { sendInvitation } from "../../services/invite";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const sendInviteRequest = async (formData: FormDataType) => {
    // 去除 confirm 这一个 field
    const { confirm, ...payload } = formData;
    try {
      setLoading(true);
      await sendInvitation(payload);
      setIsOpen(false);
      setSuccessOpen(true);
    } catch (e) {
      toast.error(e as string, {
        position: "top-center",
      });
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

  const handleCloseSuccessModal = () => {
    setSuccessOpen(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <ContentWrapper id="contentWrapper">
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
        isOpen={isOpen}
        onSubmit={handleSubmit}
        onClose={handleCloseModal}
        loading={loading}
      ></RequestModal>
      <SuccessModal
        isOpen={successOpen}
        onSubmit={handleCloseSuccessModal}
      ></SuccessModal>
    </ContentWrapper>
  );
};

export default HomePage;
