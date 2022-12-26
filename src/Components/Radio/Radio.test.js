import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Radio from "./Radio";

describe("Radio tests", () => {
  it("should render the radio", () => {
    const elType = "men";

    render(<Radio value={elType} label={elType} />);

    const radio = screen.getByRole("radio", { name: /men/i });

    expect(radio).toBeInTheDocument;
  });

  it("should select the radio", async () => {
    const elType = "men";
    const handleChange = jest.fn();

    render(
      <Radio value={elType} changeHandler={handleChange} label={elType} />
    );

    const radio = screen.getByRole("radio", { name: /men/i });

    await userEvent.click(radio);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(radio).toBeChecked;
  });

  it("should unselect the radio", async () => {
    const elType = "men";
    const handleChange = jest.fn();

    render(
      <Radio
        value={elType}
        checked={false}
        changeHandler={handleChange}
        label={elType}
      />
    );

    const radio = screen.getByRole("radio", { name: /men/i });

    await userEvent.click(radio);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(radio).not.toBeChecked;
  });
});
