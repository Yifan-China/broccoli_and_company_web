import { Title, SubTitle, Button, CenterText, ContentWrapper } from "@/components/Styled";
const HomePage = () => {
  return (
    <ContentWrapper>
      <Title>
        <div>A better way</div>
        <div>to enjoy every day</div>
      </Title>
      <SubTitle>
        <div>Be the first to know when we launch.</div>
      </SubTitle>
      <CenterText>
        <Button>Request an invite</Button>
      </CenterText>
    </ContentWrapper>
  );
};

export default HomePage;
