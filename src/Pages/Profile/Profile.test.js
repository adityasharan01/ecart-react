import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/auth";
import Profile from "./Profile";

describe("<Profile/> tests", () => {
  it("should render the page", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Profile />
        </AuthProvider>
      </BrowserRouter>
    );

    const headingEl = screen.getByRole("heading", { name: /Profile/i });

    expect(headingEl).toBeInTheDocument;
  });

  it("should navigate to home page after logout", async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Profile />
        </AuthProvider>
      </BrowserRouter>
    );

    const btnEl = screen.getByRole("button", { name: /Logout/i });

    await userEvent.click(btnEl);

    expect(window.location.pathname).toBe("/");
  });
});
