import HomePage from "..";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
jest.mock("axios");

jest.spyOn(console, "warn").mockImplementation();

test("rendering of the content title", () => {
  const component = render(<HomePage />);
  const title1 = component.getByText("A better way");
  const title2 = component.getByText("to enjoy every day.");
  expect(title1).toBeInTheDocument();
  expect(title2).toBeInTheDocument();
});

test("rendering of the content subtitle", () => {
  const component = render(<HomePage />);
  const subtitle = component.getByText("Be the first to know when we launch.");
  expect(subtitle).toBeInTheDocument();
});

test("rendering of the invitation request button", () => {
  const component = render(<HomePage />);
  const requestButton = component.getByRole("button", {
    name: "Request an invite",
  });
  expect(requestButton).toBeInTheDocument();
});

test("opening and closing the request invitation dialog", () => {
  const component = render(<HomePage />);
  // open the request invitation dialog
  const requestButton = component.getByRole("button", {
    name: "Request an invite",
  });
  fireEvent.click(requestButton);
  const modal = screen.getByTestId("request-modal");
  expect(modal).toBeInTheDocument();
  // close the request invitation dialog
  const closeIcon = component.getByTestId("close-icon");
  fireEvent.click(closeIcon);
  expect(modal).not.toBeInTheDocument();
});

test("validate the required condition of the fields", () => {
  axios.post.mockResolvedValue({});
  const component = render(<HomePage />);
  const { getByRole, getByTestId } = component;
  // open the request invitation dialog
  const requestButton = getByRole("button", {
    name: "Request an invite",
  });
  fireEvent.click(requestButton);
  const submitButton = getByRole("button", { name: "Send" });
  fireEvent.click(submitButton);
  // validations are not passed
  expect(() => getByTestId("success-modal")).toThrow(
    "Unable to find an element"
  );
});

test("validate the email match condition of the fields", () => {
  axios.post.mockResolvedValue({});
  const component = render(<HomePage />);
  const { getByRole, getByTestId, getByPlaceholderText } = component;
  // open the request invitation dialog
  const requestButton = getByRole("button", {
    name: "Request an invite",
  });
  fireEvent.click(requestButton);
  const nameInput = getByPlaceholderText("Full name");
  const emailInput = getByPlaceholderText("Email");
  const confirmInput = getByPlaceholderText("Confirm email");
  const submitButton = getByRole("button", { name: "Send" });
  fireEvent.change(nameInput, { target: { value: "Evan" } });
  fireEvent.change(emailInput, { target: { value: "Evan@mock.com" } });
  fireEvent.change(confirmInput, { target: { value: "Evan1@mock.com" } });
  fireEvent.click(submitButton);
  // validations are not passed
  expect(() => getByTestId("success-modal")).toThrow(
    "Unable to find an element"
  );
});

test("validate the email format of the fields", () => {
  axios.post.mockResolvedValue({});
  const component = render(<HomePage />);
  const { getByRole, getByTestId, getByPlaceholderText } = component;
  // open the request invitation dialog
  const requestButton = getByRole("button", {
    name: "Request an invite",
  });
  fireEvent.click(requestButton);
  const nameInput = getByPlaceholderText("Full name");
  const emailInput = getByPlaceholderText("Email");
  const confirmInput = getByPlaceholderText("Confirm email");
  const submitButton = getByRole("button", { name: "Send" });
  fireEvent.change(nameInput, { target: { value: "Evan" } });
  fireEvent.change(emailInput, { target: { value: "wrong-format" } });
  fireEvent.change(confirmInput, { target: { value: "wrong-format" } });
  fireEvent.click(submitButton);
  // validations are not passed
  expect(() => getByTestId("success-modal")).toThrow(
    "Unable to find an element"
  );
});
