import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { CartContext, CartProvider } from "../../Context/cart";
import { WishlistProvider } from "../../Context/wishlist";
import Cart from "./Cart";

describe("<Cart/> tests", () => {
  const MockCart = ({ cartState }) => {
    return (
      <BrowserRouter>
        <CartContext.Provider value={{ cartState, cartDispatch: jest.fn() }}>
          <WishlistProvider>
            <Cart />
          </WishlistProvider>
        </CartContext.Provider>
      </BrowserRouter>
    );
  };
  it("should render the page", () => {
    const cartState = {
      cart: [
        {
          _id: "282kjasdk",
          productName: "topi",
          quantity: 2,
        },
      ],
    };
    render(<MockCart cartState={cartState} />);

    const headingEl = screen.getByRole("heading", { name: /My cart/i });

    expect(headingEl).toBeInTheDocument;
  });

  it("should show empty message when cart is empty", () => {
    const cartState = {
      cart: [],
    };
    render(<MockCart cartState={cartState} />);

    const emptyMsgEl = screen.getByText(/Your cart is empty./i);

    expect(emptyMsgEl).toBeInTheDocument;
  });

  it("should go to products page when click on continue shopping", async () => {
    const cartState = {
      cart: [],
    };
    render(<MockCart cartState={cartState} />);

    const linkEl = screen.getByRole("link", { name: /Continue shopping/i });

    await userEvent.click(linkEl);

    expect(window.location.pathname).toBe("/products");
  });
});
