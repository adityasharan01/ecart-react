import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer/> tests", () => {
  it("should render the component", () => {
    render(<Footer />);

    const extraInfoEl = screen.getByTestId("extraInfo");

    expect(extraInfoEl.textContent).toBe("Made with  by Sanket Dhabarde");
  });
});
