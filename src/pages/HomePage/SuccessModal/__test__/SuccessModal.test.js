import RequestModal from "..";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


// const consoleSpy = jest.spyOn(console, 'warn').mockImplementation()
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
    name: "All done!",
  });
  expect(modalHeader).toBeInTheDocument();
});

test("render the modal text", () => {
    const component = render(
      <RequestModal
        isOpen={true}
        onClose={jest.fn}
        onSubmit={jest.fn}
        loading={false}
      ></RequestModal>
    );
    const text1 = component.getByText("You will be one of the first to experience");
    const text2 = component.getByText("You will be one of the first to experience");
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  test("render the ok button", () => {
    const component = render(
      <RequestModal
        isOpen={true}
        onClose={jest.fn}
        onSubmit={jest.fn}
        loading={false}
      ></RequestModal>
    );
    const okButton = component.getByRole("button", {
        name: "OK",
      });
      expect(okButton).toBeInTheDocument();
  });