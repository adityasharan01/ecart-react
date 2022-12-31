import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../../Context/cart";
import { WishlistProvider } from "../../Context/wishlist";
import Nav from "./Nav";

describe("<Nav/> tests", () => {
  const MockNav = () => {
    return (
      <BrowserRouter>
        <WishlistProvider>
          <CartProvider>
            <Nav />
          </CartProvider>
        </WishlistProvider>
      </BrowserRouter>
    );
  };

  it("should render the component", () => {
    render(<MockNav />);

    const headingLogoEl = screen.getByRole("link", {
      name: /Always Shopping/i,
    });

    expect(headingLogoEl).toBeInTheDocument;
  });

  it("should open mobile navbar when click on hamburgur icon", async () => {
    render(<MockNav />);

    const hamburgerEl = screen.getByTestId("hamburger");

    await userEvent.click(hamburgerEl);

    const closeNavbarEl = screen.getByTestId("closeNavbar");
    expect(closeNavbarEl).toBeInTheDocument;
  });

  it("should go to home page whenn click on logo", async () => {
    render(<MockNav />);

    const headingLogoEl = screen.getByRole("link", {
      name: /Always Shopping/i,
    });

    await userEvent.click(headingLogoEl);

    expect(window.location.pathname).toBe("/");
  });

  it("should go to profile page when click on User icon", async () => {
    render(<MockNav />);

    const userIconEl = screen.getByTitle(/User/i);

    await userEvent.click(userIconEl);

    expect(window.location.pathname).toBe("/profile");
  });

  it("should go to cart page when click on Cart icon", async () => {
    render(<MockNav />);

    const cartIconEl = screen.getByTitle(/Cart/i);

    await userEvent.click(cartIconEl);

    expect(window.location.pathname).toBe("/cart");
  });

  it("should go to wishlist page when click on wishlist icon", async () => {
    render(<MockNav />);

    const wishlistIconEl = screen.getByTitle(/Wishlist/i);

    await userEvent.click(wishlistIconEl);

    expect(window.location.pathname).toBe("/wishlist");
  });
});
