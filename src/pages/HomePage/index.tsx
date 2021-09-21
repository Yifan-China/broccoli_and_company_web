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

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const handleClick = () => {
    console.log('clicked');
    setIsOpen(true);
  };
  const handleSubmit = () => {
    setIsOpen(false);
    setSuccessOpen(true);
  }
  return (
    <ContentWrapper id="contentWrapper">
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
      <SuccessModal isOpen={successOpen}></SuccessModal>
    </ContentWrapper>
  );
};

export default HomePage;
