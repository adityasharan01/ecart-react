import { act, render, screen } from "@testing-library/react";
import { ProductFilterProvider } from "../../Context/product-filter";
import ProductList from "./ProductList";
import mockAxios from "axios";
import { WishlistProvider } from "../../Context/wishlist";
import { CartProvider } from "../../Context/cart";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/auth";

jest.mock("axios");

describe("<ProductList/> tests", () => {
  it("should render the page", () => {
    render(
      <ProductFilterProvider>
        <ProductList />
      </ProductFilterProvider>
    );

    const headingEl = screen.getByRole("heading", {
      name: /Showing All Products/i,
    });
    expect(headingEl).toBeInTheDocument;
  });

  it("should load the products when component is render", async () => {
    const resp = {
      data: {
        total: 1,
        products: [
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
      },
    };

    mockAxios.get.mockResolvedValue(resp);

    await act(async () => {
      render(
        <BrowserRouter>
          <AuthProvider>
            <ProductFilterProvider>
              <WishlistProvider>
                <CartProvider>
                  <ProductList />
                </CartProvider>
              </WishlistProvider>
            </ProductFilterProvider>
          </AuthProvider>
        </BrowserRouter>
      );
    });

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
