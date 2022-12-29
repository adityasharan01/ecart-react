import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../../Context/cart";
import CheckoutCard from "./CheckoutCard";

describe("CheckoutCard tests", () => {
  it("should render the component", () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <CheckoutCard />
        </CartProvider>
      </BrowserRouter>
    );

    const cardHeadingEl = screen.getByRole("heading", {
      name: /PRICE DETAILS/i,
    });

    expect(cardHeadingEl).toBeInTheDocument;
  });

  it("should go to checkout page when click on PLACE ORDER", async () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <CheckoutCard />
        </CartProvider>
      </BrowserRouter>
    );

    const placeOrderEl = screen.getByText(/PLACE ORDER/i);

    await userEvent.click(placeOrderEl);

    expect(window.location.pathname).toBe("/checkout");
  });
});
