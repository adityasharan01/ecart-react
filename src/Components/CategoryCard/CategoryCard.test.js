import { act, render, screen } from "@testing-library/react";
import CategoryCard from "./CategoryCard";
import { ProductFilterProvider } from "../../Context/product-filter";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("CategoryCard tests", () => {
  it("should render the component", () => {
    const category = "Girls";
    const imgSrc = "/images/girl-watch.webp";

    render(
      <BrowserRouter>
        <ProductFilterProvider>
          <CategoryCard category={category} imgSrc={imgSrc} />
        </ProductFilterProvider>
      </BrowserRouter>
    );

    const imageEl = screen.getByRole("img");
    const categoryEl = screen.getByTestId("category");

    expect(imageEl).toBeInTheDocument;
    expect(categoryEl.textContent).toBe("Girls");
  });

  it("should select the category as Boys when click on card", async () => {
    const category = "Boys";
    const imgSrc = "/images/boys-watch.webp";

    render(
      <BrowserRouter>
        <ProductFilterProvider>
          <CategoryCard category={category} imgSrc={imgSrc} />
        </ProductFilterProvider>
      </BrowserRouter>
    );

    const categoryCardEl = screen.getByTestId("category-card");

    await userEvent.click(categoryCardEl);
  });

  it("should select the category as Womens when click on card", async () => {
    const category = "Womens";
    const imgSrc = "/images/women-watch.webp";

    render(
      <BrowserRouter>
        <ProductFilterProvider>
          <CategoryCard category={category} imgSrc={imgSrc} />
        </ProductFilterProvider>
      </BrowserRouter>
    );

    const categoryCardEl = screen.getByTestId("category-card");

    await userEvent.click(categoryCardEl);
  });

  it("should select the category as Mens when click on card", async () => {
    const category = "Mens";
    const imgSrc = "/images/men-watch.webp";

    render(
      <BrowserRouter>
        <ProductFilterProvider>
          <CategoryCard category={category} imgSrc={imgSrc} />
        </ProductFilterProvider>
      </BrowserRouter>
    );

    const categoryCardEl = screen.getByTestId("category-card");

    await userEvent.click(categoryCardEl);
  });

  it("should select the category as girls when click on card", async () => {
    const category = "Girls";
    const imgSrc = "/images/girl-watch.webp";

    render(
      <BrowserRouter>
        <ProductFilterProvider>
          <CategoryCard category={category} imgSrc={imgSrc} />
        </ProductFilterProvider>
      </BrowserRouter>
    );

    const categoryCardEl = screen.getByTestId("category-card");

    await userEvent.click(categoryCardEl);
  });

  it("should select the category as All when click on card", async () => {
    const category = "All";

    render(
      <BrowserRouter>
        <ProductFilterProvider>
          <CategoryCard category={category} />
        </ProductFilterProvider>
      </BrowserRouter>
    );

    const categoryCardEl = screen.getByTestId("category-card");

    await userEvent.click(categoryCardEl);
  });
});
