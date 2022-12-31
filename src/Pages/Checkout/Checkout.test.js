import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AddressProvider } from "../../Context/address";
import { AuthProvider } from "../../Context/auth";
import { CartContext } from "../../Context/cart";
import { OrderProvider } from "../../Context/order-context";
import Checkout from "./Checkout";

describe("<Checkout/> tests", () => {
  const MockCheckout = ({ cartState }) => {
    return (
      <BrowserRouter>
        <AuthProvider>
          <CartContext.Provider value={{ cartState, cartDispatch: jest.fn() }}>
            <AddressProvider>
              <OrderProvider>
                <Checkout />
              </OrderProvider>
            </AddressProvider>
          </CartContext.Provider>
        </AuthProvider>
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
    render(<MockCheckout cartState={cartState} />);

    const headingEl = screen.findByRole("heading", { name: /Checkout/i });

    expect(headingEl).toBeInTheDocument;
  });

  it("should call razorpay api to make payment", async () => {
    const cartState = {
      cart: [
        {
          _id: "282kjasdk",
          productName: "topi",
          quantity: 2,
          price: 200,
        },
      ],
    };
    render(<MockCheckout cartState={cartState} />);

    const btnEl = screen.getByRole("button", { name: /Proceed to pay/i });

    await userEvent.click(btnEl);

    expect(btnEl).toBeInTheDocument;
  });
});
