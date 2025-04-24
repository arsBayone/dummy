import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

// beforeEach(() => {
//   console.log("Before Each tests ************8");
// });

// beforeAll(() => {
//   console.log("Before all tests ************8");
// });

test("renders counter with initial value", () => {
  console.log("test 1 ************");
  render(<Counter />);
  const text = screen.getByText(/React Counter/i);
  const image = screen.getByTitle("React image");
  expect(text).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

test("render input box", () => {
  console.log("test 2 ************");
  render(<Counter />);
  let inputbox = screen.getByRole("textbox");
  let checkPlaceholder = screen.getByPlaceholderText("Type here...");
  let checkLabel = screen.getByText("Add new");
  expect(checkLabel).toBeInTheDocument();

  expect(inputbox).toBeInTheDocument();
  expect(checkPlaceholder).toBeInTheDocument();
  expect(inputbox).toHaveAttribute("id", "userID");
});
// test("renders counter with initial value", () => {
//   const { getByTestId } = render(<Counter />);
//   expect(getByTestId("count").textContent).toBe("0");
// });

test("increments counter on button click", () => {
  const { getByTestId } = render(<Counter />);
  const button = getByTestId("increment");
  fireEvent.click(button);
  expect(getByTestId("count").textContent).toBe("1");
});

describe("ui test", () => {
  test("input change", () => {
    console.log("test 3 ************");

    render(<Counter />);
    const inputbox = screen.getByRole("textbox");
    fireEvent.change(inputbox, { target: { value: "test" } });
    expect(inputbox.value).toBe("test");
  });
});

// afterAll(() => {
//   console.log("after All tests ************8");
// });
// afterAll(() => {
//   console.log("after All tests ************8");
// });
// afterAll(() => {
//   console.log("after All tests ************8");
// });
// afterAll(() => {
//   console.log("after All tests ************8");
// });
// afterAll(() => {
//   console.log("after All tests ************8");
// });
