import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("<Spinner/> test", () => {
  it("should render the spinner", () => {
    render(<Spinner />);

    const spinnerEl = screen.getByTestId("spinner");

    expect(spinnerEl).toBeInTheDocument;
  });
});
