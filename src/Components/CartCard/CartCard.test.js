import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartProvider } from "../../Context/cart";
import { WishlistProvider } from "../../Context/wishlist";
import CartCard from "./CartCard";
import mockAxios from "axios";

jest.mock("axios");

describe("CartCard tests", () => {
  it("should render the component", () => {
    const product = {
      _id: "282kjasdk",
      productName: "topi",
    };

    render(
      <CartProvider>
        <WishlistProvider>
          <CartCard product={product} />
        </WishlistProvider>
      </CartProvider>
    );

    const headingEl = screen.getByRole("heading", { name: /topi/i });

    expect(headingEl).toBeInTheDocument;
  });

  describe("increaseQuantity tests", () => {
    it("should call increaseQuantity when click on +", async () => {
      const product = {
        _id: "282kjasdk",
        productName: "topi",
        quantity: 2,
      };
      const setIsLoadingMock = jest.fn();

      const response = {
        data: {
          cart: [
            {
              _id: "282kjasdk",
              productName: "topi",
              quantity: 3,
            },
          ],
        },
      };
      mockAxios.post.mockResolvedValue(response);

      render(
        <CartProvider>
          <WishlistProvider>
            <CartCard product={product} setIsloading={setIsLoadingMock} />
          </WishlistProvider>
        </CartProvider>
      );

      const increaseIconEl = screen.getByTitle(/Increase quantity/i);

      await act(async () => {
        userEvent.click(increaseIconEl);
      });

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(setIsLoadingMock).toHaveBeenCalledTimes(2);
    });

    it("should throw error when api call rejected in increase quantity", async () => {
      const product = {
        _id: "282kjasdk",
        productName: "topi",
        quantity: 2,
      };
      const setIsLoadingMock = jest.fn();
      mockAxios.post.mockRejectedValue(new Error("Something went wrong"));

      render(
        <CartProvider>
          <WishlistProvider>
            <CartCard product={product} setIsloading={setIsLoadingMock} />
          </WishlistProvider>
        </CartProvider>
      );

      const increaseIconEl = screen.getByTitle(/Increase quantity/i);

      await act(async () => {
        userEvent.click(increaseIconEl);
      });

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(setIsLoadingMock).toHaveBeenCalledTimes(2);
    });
  });

  describe("decreaseQuantity tests", () => {
    it("should call decreaseQuantity when click on -", async () => {
      const product = {
        _id: "282kjasdk",
        productName: "topi",
        quantity: 2,
      };
      const setIsLoadingMock = jest.fn();

      const response = {
        data: {
          cart: [
            {
              _id: "282kjasdk",
              productName: "topi",
              quantity: 1,
            },
          ],
        },
      };
      mockAxios.post.mockResolvedValue(response);

      render(
        <CartProvider>
          <WishlistProvider>
            <CartCard product={product} setIsloading={setIsLoadingMock} />
          </WishlistProvider>
        </CartProvider>
      );

      const decreaseIconEl = screen.getByTitle(/Decrease quantity/i);

      await act(async () => {
        userEvent.click(decreaseIconEl);
      });

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(setIsLoadingMock).toHaveBeenCalledTimes(2);
    });

    it("should disabled - element when quantity is 1", () => {
      const product = {
        _id: "282kjasdk",
        productName: "topi",
        quantity: 1,
      };

      render(
        <CartProvider>
          <WishlistProvider>
            <CartCard product={product} />
          </WishlistProvider>
        </CartProvider>
      );

      const decreaseIconEl = screen.getByTitle(/Decrease quantity/i);

      expect(decreaseIconEl.classList).toContain("disabled-element");
    });

    it("should throw error when api call rejected in decrease quantity", async () => {
      const product = {
        _id: "282kjasdk",
        productName: "topi",
        quantity: 2,
      };
      const setIsLoadingMock = jest.fn();
      mockAxios.post.mockRejectedValue(new Error("Something went wrong"));

      render(
        <CartProvider>
          <WishlistProvider>
            <CartCard product={product} setIsloading={setIsLoadingMock} />
          </WishlistProvider>
        </CartProvider>
      );

      const decreaseIconEl = screen.getByTitle(/Decrease quantity/i);

      await act(async () => {
        userEvent.click(decreaseIconEl);
      });

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(setIsLoadingMock).toHaveBeenCalledTimes(2);
    });
  });

  describe("removeFromCart tests", () => {
    it("should call removeFromCart when click on Remove from cart", async () => {
      const product = {
        _id: "282kjasdk",
        productName: "topi",
        quantity: 2,
      };
      const setIsLoadingMock = jest.fn();
      const response = {
        data: {
          cart: [],
        },
      };
      mockAxios.delete.mockResolvedValue(response);

      render(
        <CartProvider>
          <WishlistProvider>
            <CartCard product={product} setIsloading={setIsLoadingMock} />
          </WishlistProvider>
        </CartProvider>
      );

      const removeFromCartBtnEl = screen.getByRole("button", {
        name: /Remove from cart/i,
      });

      await act(async () => {
        userEvent.click(removeFromCartBtnEl);
      });

      expect(setIsLoadingMock).toHaveBeenCalledTimes(2);
      expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    });

    it("should throw error when api call rejected in removeFromCart", async () => {
      const product = {
        _id: "282kjasdk",
        productName: "topi",
        quantity: 2,
      };
      const setIsLoadingMock = jest.fn();
      mockAxios.delete.mockRejectedValue(new Error("Something went wrong"));

      render(
        <CartProvider>
          <WishlistProvider>
            <CartCard product={product} setIsloading={setIsLoadingMock} />
          </WishlistProvider>
        </CartProvider>
      );

      const removeFromCartBtnEl = screen.getByRole("button", {
        name: /Remove from cart/i,
      });

      await act(async () => {
        userEvent.click(removeFromCartBtnEl);
      });

      expect(setIsLoadingMock).toHaveBeenCalledTimes(2);
      expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    });
  });

  describe("Move to wishlist tests", () => {
    it("should call addToWishlist when click on move to wishlist", async () => {
      const product = {
        _id: "282kjasdk",
        productName: "topi",
        quantity: 2,
      };
      const setIsLoadingMock = jest.fn();

      const response = {
        data: {
          wishlist: [
            {
              _id: "282kjasdk",
              productName: "topi",
              quantity: 2,
            },
          ],
        },
      };
      mockAxios.post.mockResolvedValue(response);

      render(
        <CartProvider>
          <WishlistProvider>
            <CartCard product={product} setIsloading={setIsLoadingMock} />
          </WishlistProvider>
        </CartProvider>
      );

      const moveToWishlistBtnEl = screen.getByRole("button", {
        name: /Move to wishlist/i,
      });

      await act(async () => {
        userEvent.click(moveToWishlistBtnEl);
      });

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(setIsLoadingMock).toHaveBeenCalledTimes(2);
    });

    it("should throw error when api call is failed in addToWishlist", async () => {
      const product = {
        _id: "282kjasdk",
        productName: "topi",
        quantity: 2,
      };
      const setIsLoadingMock = jest.fn();

      mockAxios.post.mockRejectedValue(new Error("Something went wrong"));

      render(
        <CartProvider>
          <WishlistProvider>
            <CartCard product={product} setIsloading={setIsLoadingMock} />
          </WishlistProvider>
        </CartProvider>
      );

      const moveToWishlistBtnEl = screen.getByRole("button", {
        name: /Move to wishlist/i,
      });

      await act(async () => {
        userEvent.click(moveToWishlistBtnEl);
      });

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(setIsLoadingMock).toHaveBeenCalledTimes(2);
    });
  });
});
