import styled from "styled-components";

export const Header = styled.header`
  height: 10%;
  font-size: small;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  display: flex;
  align-items: center;
  padding-left: 5em;
`;

export const Main = styled.main`
  height: calc(100vh - 20%);
`;

export const Footer = styled.footer`
  height: 10%;
  font-size: small;
  font-size: small;
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    font-style: italic;
  }
`;

export const CenterText = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  font-size: x-large;
  font-weight: bold;
  text-align: center;
`;

export const SubTitle = styled.div`
  font-size: x-small;
  margin: 1rem 0;
  text-align: center;
`;

export const Button = styled.button`
  border-style: solid;
  padding: 1em;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
