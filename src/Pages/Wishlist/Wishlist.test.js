import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/auth";
import { CartProvider } from "../../Context/cart";
import { WishlistContext } from "../../Context/wishlist";
import Wishlist from "./Wishlist";

describe("<Wishlist/> tests", () => {
  it("should render the page", () => {
    const state = {
      wishlist: [
        {
          _id: "630bcd47ec834f8",
          productName: "test",
          price: 2000,
          description: "test",
          categoryName: "Mens",
          image: "",
          latest: true,
          rate: 4.2,
          alt: "test watch",
          oldPrice: 3000,
          fastDelivery: true,
          quantity: 1,
          inStock: true,
          discount: 50,
        },
      ],
    };

    render(
      <BrowserRouter>
        <AuthProvider>
          <WishlistContext.Provider value={{ state, dispatch: jest.fn() }}>
            <CartProvider>
              <Wishlist />
            </CartProvider>
          </WishlistContext.Provider>
        </AuthProvider>
      </BrowserRouter>
    );

    const headingEl = screen.getByRole("heading", { name: /My wishlist/i });

    expect(headingEl).toBeInTheDocument;
  });

  it("should show empty message when wishlist is empty", () => {
    const state = {
      wishlist: [],
    };

    render(
      <BrowserRouter>
        <AuthProvider>
          <WishlistContext.Provider value={{ state, dispatch: jest.fn() }}>
            <CartProvider>
              <Wishlist />
            </CartProvider>
          </WishlistContext.Provider>
        </AuthProvider>
      </BrowserRouter>
    );

    const emptyMsgEl = screen.getByText(/Your wishlist is empty./i);

    expect(emptyMsgEl).toBeInTheDocument;
  });
});
