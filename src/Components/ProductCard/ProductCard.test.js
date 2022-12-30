import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../../Context/auth";
import { CartContext } from "../../Context/cart";
import { WishlistContext } from "../../Context/wishlist";
import ProductCard from "./ProductCard";
import mockAxios from "axios";

jest.mock("axios");

describe("<ProductCard/> tests", () => {
  const product = {
    _id: "1213a",
    productName: "topi",
    price: 50,
    oldPrice: 60,
    rate: 4,
    inStock: true,
  };

  const user = {
    cart: [],
    wishlist: [],
    _id: "1234",
    firstName: "Test",
    lastName: "me",
    email: "test@123.com",
  };

  const wishlist = [];
  const cart = [];

  const MockProductCard = ({ user, product, wishlist, cart }) => {
    return (
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user, setUser: jest.fn() }}>
          <CartContext.Provider
            value={{ cartState: { cart }, cartDispatch: jest.fn() }}
          >
            <WishlistContext.Provider
              value={{ state: { wishlist }, dispatch: jest.fn() }}
            >
              <ProductCard product={product} />
            </WishlistContext.Provider>
          </CartContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );
  };

  it("should render the component", () => {
    render(
      <MockProductCard product={product} cart={cart} wishlist={wishlist} />
    );

    const productNameEl = screen.getByRole("heading", { name: /topi/i });

    expect(productNameEl).toBeInTheDocument;
  });

  it("should add product to wishlish when click on wishlist icon", async () => {
    const resp = {
      data: {
        wishlist: [
          {
            _id: "1213a",
            productName: "topi",
            price: 50,
            oldPrice: 60,
            rate: 4,
            inStock: true,
          },
        ],
      },
    };
    mockAxios.post.mockResolvedValue(resp);

    render(
      <MockProductCard
        user={user}
        product={product}
        cart={cart}
        wishlist={wishlist}
      />
    );

    const addToWishlistEl = screen.getByTestId("addToWishlistIcon");

    await act(async () => {
      userEvent.click(addToWishlistEl);
    });

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });

  it("should navigate to login page when user is empty if user click on addToWishlist icon", async () => {
    render(
      <MockProductCard product={product} cart={cart} wishlist={wishlist} />
    );

    const addToWishlistEl = screen.getByTestId("addToWishlistIcon");

    await userEvent.click(addToWishlistEl);

    expect(window.location.pathname).toBe("/login");
  });

  it("should should log the error when addToWishlist api call is failed", async () => {
    mockAxios.post.mockRejectedValue(new Error("Something went wrong"));

    render(<MockProductCard user={user} product={product} />);

    const addToWishlistEl = screen.getByTestId("addToWishlistIcon");

    await userEvent.click(addToWishlistEl);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });

  it("should navigate to login page when user is not loggedIn if user click on removeFromWishlistIcon icon", async () => {
    const wishlist = [product];
    render(
      <MockProductCard product={product} wishlist={wishlist} cart={cart} />
    );

    const removeFromWishlistIconEl = screen.getByTestId(
      "removeFromWishlistIcon"
    );

    await userEvent.click(removeFromWishlistIconEl);

    expect(window.location.pathname).toBe("/login");
  });

  it("should remove the product from wishlist when click on removeFromWishlistIcon", async () => {
    const wishlist = [product];
    const resp = {
      data: {
        wishlist: [],
      },
    };
    mockAxios.delete.mockResolvedValue(resp);

    render(
      <MockProductCard
        product={product}
        wishlist={wishlist}
        cart={cart}
        user={user}
      />
    );

    const removeFromWishlistIconEl = screen.getByTestId(
      "removeFromWishlistIcon"
    );

    await act(async () => {
      userEvent.click(removeFromWishlistIconEl);
    });

    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
  });

  it("should should log the error when removeFromWishlist api call is failed", async () => {
    const wishlist = [product];
    mockAxios.delete.mockRejectedValue(new Error("Something went wrong"));

    render(
      <MockProductCard
        user={user}
        product={product}
        wishlist={wishlist}
        cart={cart}
      />
    );

    const removeFromWishlistIconEl = screen.getByTestId(
      "removeFromWishlistIcon"
    );

    await userEvent.click(removeFromWishlistIconEl);

    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
  });

  it("should add product to cart when click on Add to cart", async () => {
    const resp = {
      data: {
        cart: [
          {
            _id: "1213a",
            productName: "topi",
            price: 50,
            oldPrice: 60,
            rate: 4,
            inStock: true,
          },
        ],
      },
    };
    mockAxios.post.mockResolvedValue(resp);

    render(
      <MockProductCard
        product={product}
        wishlist={wishlist}
        cart={cart}
        user={user}
      />
    );

    const addToCartEl = screen.getByRole("button", { name: /Add to cart/i });

    await act(async () => {
      userEvent.click(addToCartEl);
    });

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });

  it("should navigate to login page when user is not loggedIn if user click on Add to cart", async () => {
    render(
      <MockProductCard product={product} wishlist={wishlist} cart={cart} />
    );

    const addToCartEl = screen.getByRole("button", { name: /Add to cart/i });

    await userEvent.click(addToCartEl);

    expect(window.location.pathname).toBe("/login");
  });

  it("should should log the error when Add to cart api call is failed", async () => {
    mockAxios.post.mockRejectedValue(new Error("Something went wrong"));

    render(
      <MockProductCard
        user={user}
        product={product}
        wishlist={wishlist}
        cart={cart}
      />
    );

    const addToCartEl = screen.getByRole("button", { name: /Add to cart/i });

    await userEvent.click(addToCartEl);

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });

  it("should go to cart page when product is in cart and user click on Go to cart", async () => {
    const cart = [product];
    render(
      <MockProductCard
        user={user}
        product={product}
        wishlist={wishlist}
        cart={cart}
      />
    );

    const goToCartEl = screen.getByRole("button", { name: /Go to cart/i });

    await userEvent.click(goToCartEl);

    expect(window.location.pathname).toBe("/cart");
  });

  it("should display out of stock batch on product when product is not in stock", () => {
    const product = {
      _id: "1213a",
      productName: "topi",
      price: 50,
      oldPrice: 60,
      rate: 4,
      inStock: false,
    };

    render(
      <MockProductCard
        user={user}
        product={product}
        wishlist={wishlist}
        cart={cart}
      />
    );

    const outOfStockBatchEl = screen.getByText(/Out of stock/i);

    expect(outOfStockBatchEl).toBeInTheDocument;
  });
});
