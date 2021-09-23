import {
  Title,
  SubTitle,
  InviteButton,
  CenterText,
  ContentWrapper,
} from "@/components/Styled";
import { useState } from "react";
import RequestModal from "@/pages/HomePage/RequestModal";
import SuccessModal from "@/pages/HomePage/SuccessModal";
import { sendInvitation } from "@/services/invite";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setIsOpen(true);
  };

  const sendInviteRequest = async (formData: FormDataType) => {
    try {
      await sendInvitation(formData);
      setIsOpen(false);
      setSuccessOpen(true);
    } catch (e) {
      toast.error(e as string, {
        position: "top-center",
      });
    }
  };

  const handleSubmit = (formData: FormDataType) => {
    sendInviteRequest(formData);
    toast.info("An invitation request has been sent successfully", {
      position: "top-center",
    });
  };

  const handleOk = () => {
    setSuccessOpen(false);
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
        <InviteButton onClick={handleClick}>Request an invite</InviteButton>
      </CenterText>
      <RequestModal isOpen={isOpen} onSubmit={handleSubmit}></RequestModal>
      <SuccessModal isOpen={successOpen} onSubmit={handleOk}></SuccessModal>
    </ContentWrapper>
  );
};

export default HomePage;
