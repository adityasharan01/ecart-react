import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

describe("<Home/> tests", () => {
  it("should render the page", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const headingEl = screen.getByRole("heading", {
      name: /Watches for every moment/i,
    });

    expect(headingEl).toBeInTheDocument;
  });

  it("should go to product page when click on shop now", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const linkEl = screen.getByRole("link", { name: /shop now/i });

    await userEvent.click(linkEl);

    expect(window.location.pathname).toBe("/products");
  });
});
