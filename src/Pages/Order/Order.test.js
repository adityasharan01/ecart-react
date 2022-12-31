import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { OrderContext, OrderProvider } from "../../Context/order-context";
import Order from "./Order";

describe("<Order/> tests", () => {
  it("should render the page", () => {
    const orderState = {
      order: {
        orderId: "213",
        paymentId: "12312",
        totalAmount: 33333,
        address: "testAddress",
        items: [
          {
            _id: "wdww",
            productName: "test",
          },
        ],
      },
    };
    render(
      <BrowserRouter>
        <OrderContext.Provider value={{ orderState }}>
          <Order />
        </OrderContext.Provider>
      </BrowserRouter>
    );

    const headingEl = screen.getByRole("heading", {
      name: /Congratulations 🎉/i,
    });

    expect(headingEl).toBeInTheDocument;
  });

  it("should go to products page when click on Shop more", async () => {
    render(
      <BrowserRouter>
        <OrderProvider>
          <Order />
        </OrderProvider>
      </BrowserRouter>
    );

    const btnEl = screen.getByRole("button", { name: /Shop more 🤗/i });

    await userEvent.click(btnEl);

    expect(window.location.pathname).toBe("/products");
  });
});
