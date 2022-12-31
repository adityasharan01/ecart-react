import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  ProductFilterContext,
  ProductFilterProvider,
} from "../../Context/product-filter";
import Filter from "./Filter";

const initialState = {
  sortBy: "",
  rating: 0,
  price: 2000,
  categories: {
    menWatches: false,
    womenWatches: false,
    boyWatches: false,
    girlWatches: false,
  },
  includeOutOfStock: true,
  fastDelivery: false,
};

const mockDispatch = jest.fn();

const MockFilterComponent = () => {
  return (
    <ProductFilterContext.Provider
      value={{ state: initialState, dispatch: mockDispatch }}
    >
      <Filter />
    </ProductFilterContext.Provider>
  );
};

describe("Filter tests", () => {
  it("should render the component", () => {
    render(
      <ProductFilterProvider>
        <Filter />
      </ProductFilterProvider>
    );

    const filterHeadingEl = screen.getByRole("heading", { name: /Filter/i });

    expect(filterHeadingEl).toBeInTheDocument;
  });

  it("should clear all the filters when click on Clear", async () => {
    render(<MockFilterComponent />);

    const clearEl = screen.getByText(/Clear/i);

    await userEvent.click(clearEl);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  it("should select the range properly", async () => {
    render(
      <ProductFilterProvider>
        <Filter />
      </ProductFilterProvider>
    );

    const rangeEl = screen.getByRole("slider", { name: /Price/i });
    const currentPrice = screen.getByTestId("currentPrice");

    await fireEvent.change(rangeEl, { target: { value: 1500 } });

    expect(rangeEl.value).toBe("1500");
    expect(currentPrice.textContent).toBe("₹1500 / ₹2000");
  });

  describe("Category tests", () => {
    it("should select out of stock when click on Include out of stock", async () => {
      render(<MockFilterComponent />);

      const includeOutOfStockEl = screen.getByRole("checkbox", {
        name: /Include out of stock/i,
      });

      await userEvent.click(includeOutOfStockEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it("should select Fast delivery when click on Fast delivery", async () => {
      render(<MockFilterComponent />);

      const fastDeliveryEl = screen.getByRole("checkbox", {
        name: /Fast delivery/i,
      });

      await userEvent.click(fastDeliveryEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });

  describe("Ideal for tests", () => {
    it("should select Men when click on Men", async () => {
      render(<MockFilterComponent />);

      const selectMenEl = screen.getByRole("checkbox", {
        name: "Mens",
      });

      await userEvent.click(selectMenEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it("should select Women when click on Women", async () => {
      render(<MockFilterComponent />);

      const selectWomenEl = screen.getByRole("checkbox", {
        name: /Womens/i,
      });

      await userEvent.click(selectWomenEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it("should select Boys when click on Boys", async () => {
      render(<MockFilterComponent />);

      const selectBoysEl = screen.getByRole("checkbox", {
        name: /Boys/i,
      });

      await userEvent.click(selectBoysEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it("should select Girls when click on Girls", async () => {
      render(<MockFilterComponent />);

      const selectGirlsEl = screen.getByRole("checkbox", {
        name: /Girls/i,
      });

      await userEvent.click(selectGirlsEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });

  describe("Rating tests", () => {
    it("should select 4 ★ & above when click on 4 ★ & above", async () => {
      render(<MockFilterComponent />);

      const ratingEl = screen.getByRole("radio", {
        name: "4 ★ & above",
      });

      await userEvent.click(ratingEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
    it("should select 3 ★ & above when click on 3 ★ & above", async () => {
      render(<MockFilterComponent />);

      const ratingEl = screen.getByRole("radio", {
        name: "3 ★ & above",
      });

      await userEvent.click(ratingEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it("should select 2 ★ & above when click on 2 ★ & above", async () => {
      render(<MockFilterComponent />);

      const ratingEl = screen.getByRole("radio", {
        name: "2 ★ & above",
      });

      await userEvent.click(ratingEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it("should select 1 ★ & above when click on 1 ★ & above", async () => {
      render(<MockFilterComponent />);

      const ratingEl = screen.getByRole("radio", {
        name: "1 ★ & above",
      });

      await userEvent.click(ratingEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });

  describe("Sort by tests", () => {
    it("should select Price - Low to High when click on Price - Low to High", async () => {
      render(<MockFilterComponent />);

      const priceEl = screen.getByRole("radio", {
        name: "Price - Low to High",
      });

      await userEvent.click(priceEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it("should select Price - High to Low when click on Price - High to Low", async () => {
      render(<MockFilterComponent />);

      const priceEl = screen.getByRole("radio", {
        name: "Price - High to Low",
      });

      await userEvent.click(priceEl);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });
});
