import styled from "styled-components";
import { Form as AntdForm, Input as AntdInput, Button } from "antd";

export const Header = styled.header`
  height: 5rem;
  font-size: 2rem;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  display: flex;
  align-items: center;
  padding: 1rem 1rem 1rem 10%;
`;

export const Main = styled.main`
  /* laptop 设置最小高度为 600px */ 
  height: max(calc(100vh - 14rem), 600px);
  /* 在移动设备上不设置最小高度 */ 
  @media (max-width: 1024px) {
    height: calc(100vh - 14rem);
  }
`;

export const Footer = styled.footer`
  height: 5rem;
  font-size: 1rem;
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    font-style: italic;
  }
  padding: 1rem;
`;

export const CenterText = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  font-size: 5rem;
  line-height: 1em;
  font-weight: bold;
  text-align: center;
`;

export const SubTitle = styled.div`
  font-size: 2rem;
  margin: 2rem 0;
  text-align: center;
`;

export const InviteButton = styled.button`
  border-style: solid;
  padding: 1em;
  font-size: 2rem;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalHeader = styled.h1`
  font-style: italic;
  text-align: center;
  margin-top: 4rem;
`;

export const Divider = styled.hr`
  width: 4rem;
  background-color: black;
  border: none;
  height: 2px;
`;

export const Form = styled(AntdForm)`
  margin-top: 3rem;
`;

export const FormItem = styled(AntdForm.Item)`
  margin-top: 2rem;
`;

export const Input = styled(AntdInput)`
  width: 80%;
  font-size: 2rem;
`;

export const SubmitButton = styled(Button)`
  width: 80%;
  font-size: 2rem;
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

export const ModalText = styled.div`
  margin-top: 3rem;
`

