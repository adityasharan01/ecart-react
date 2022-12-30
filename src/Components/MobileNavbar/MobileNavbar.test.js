import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

describe("<MobileNavbar/> tests", () => {
  const toggleMock = jest.fn();
  it("should render the component", () => {
    render(
      <BrowserRouter>
        <MobileNavbar toggleMobileNavbarVisibility={toggleMock} />
      </BrowserRouter>
    );

    const profileEl = screen.getByText(/Profile/i);

    expect(profileEl).toBeInTheDocument;
  });

  it("should toggle the navbar when click on any nav", async () => {
    render(
      <BrowserRouter>
        <MobileNavbar toggleMobileNavbarVisibility={toggleMock} />
      </BrowserRouter>
    );

    const profileEl = screen.getByText(/Profile/i);

    await userEvent.click(profileEl);

    expect(toggleMock).toHaveBeenCalledTimes(1);
  });

  it("should close the navbar when click on cross icon", async () => {
    render(
      <BrowserRouter>
        <MobileNavbar toggleMobileNavbarVisibility={toggleMock} />
      </BrowserRouter>
    );

    const closeNavbarEl = screen.getByTestId("closeNavbar");

    await userEvent.click(closeNavbarEl);

    expect(toggleMock).toHaveBeenCalledTimes(1);
  });
});
