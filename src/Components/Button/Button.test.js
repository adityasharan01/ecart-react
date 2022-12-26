import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button tests", () => {
  it("should render the component", () => {
    render(<Button>Click</Button>);

    const btnEl = screen.getByRole("button", { name: /click/i });

    expect(btnEl).toBeInTheDocument;
  });

  it("should respond when clicked", async () => {
    const handleClick = jest.fn();

    render(<Button clickHandler={handleClick}>Click</Button>);

    const btnEl = screen.getByRole("button", { name: /click/i });

    await userEvent.click(btnEl);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not respond to click when disabled", async () => {
    const handleClick = jest.fn();

    render(
      <Button clickHandler={handleClick} disabled={true}>
        Click
      </Button>
    );

    const btnEl = screen.getByRole("button", { name: /click/i });

    await userEvent.click(btnEl);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
