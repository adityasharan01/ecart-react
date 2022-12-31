import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("<NotFound/> tests", () => {
  it("should render the page", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const headingEl = screen.getByRole("heading", {
      name: /Hit the wrong route😔/i,
    });

    expect(headingEl).toBeInTheDocument;
  });

  it("should go to home page when click on Go back to home page", async () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const linkEl = screen.getByRole("link", { name: /Go back to home page/i });

    await userEvent.click(linkEl);

    expect(window.location.pathname).toBe("/");
  });
});
