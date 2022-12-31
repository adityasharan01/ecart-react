import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input tests", () => {
  it("should render the component", () => {
    const elName = "username";

    render(<Input label={elName} />);

    const inputEl = screen.getByRole("textbox", { name: /username/i });

    expect(inputEl).toBeInTheDocument;
  });

  it("should react to change in user input", async () => {
    const elName = "username";
    const currentValue = "san";
    const nextChar = "ket";

    const onChangeMock = jest.fn();

    render(
      <Input label={elName} value={currentValue} changeHandler={onChangeMock} />
    );

    const inputEl = screen.getByRole("textbox", { name: /username/i });

    await userEvent.type(inputEl, nextChar);

    expect(onChangeMock).toHaveBeenCalledTimes(3);
  });
});
