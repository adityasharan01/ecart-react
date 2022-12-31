import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckBox from "./CheckBox";

describe("Checkbox tests", () => {
  it("should render the checkbox", () => {
    const elType = "men";

    render(<CheckBox type={elType} />);

    const checkbox = screen.getByRole("checkbox", { name: /men/i });

    expect(checkbox).toBeInTheDocument;
  });

  it("should select the checkbox", async () => {
    const elType = "men";
    const handleChange = jest.fn();

    render(<CheckBox type={elType} changeHandler={handleChange} />);

    const checkbox = screen.getByRole("checkbox", { name: /men/i });

    await userEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked;
  });

  it("should unselect the checkbox", async () => {
    const elType = "men";
    const handleChange = jest.fn();

    render(
      <CheckBox type={elType} checked={false} changeHandler={handleChange} />
    );

    const checkbox = screen.getByRole("checkbox", { name: /men/i });

    await userEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).not.toBeChecked;
  });
});
