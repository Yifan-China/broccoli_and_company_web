import RequestModal from "..";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("render the modal header", () => {
  const component = render(
    <RequestModal
      isOpen={true}
      onClose={jest.fn}
      onSubmit={jest.fn}
      loading={false}
    ></RequestModal>
  );
  const modalHeader = component.getByRole("heading", {
    name: "Request an invite",
  });
  expect(modalHeader).toBeInTheDocument();
});

test("render the form", () => {
  const component = render(
    <RequestModal
      isOpen={true}
      onClose={jest.fn}
      onSubmit={jest.fn}
      loading={false}
    ></RequestModal>
  );
  const requestForm = component.getByTestId("request-form");
  expect(requestForm).toBeInTheDocument();
});

test("render the submit button", () => {
  const component = render(
    <RequestModal
      isOpen={true}
      onClose={jest.fn}
      onSubmit={jest.fn}
      loading={false}
    ></RequestModal>
  );
  const modalHeader = component.getByRole("button", {
    name: "Submit",
  });
  expect(modalHeader).toBeInTheDocument();
});

