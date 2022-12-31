import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/auth";
import { CartProvider } from "../../Context/cart";
import { WishlistProvider } from "../../Context/wishlist";
import Login from "./Login";
import mockAxios from "axios";
import { act } from "react-dom/test-utils";

jest.mock("axios");

describe("<Login/> tests", () => {
  const MockLogin = () => {
    return (
      <BrowserRouter>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <Login />
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </BrowserRouter>
    );
  };

  it("should render the component", () => {
    render(<MockLogin />);

    const headingEl = screen.getByRole("heading", { name: /Login/i });

    expect(headingEl).toBeInTheDocument;
  });

  it("should populate dummy email and password when click on Login with dummy user", async () => {
    render(<MockLogin />);

    const buttonEl = screen.getByRole("button", {
      name: /Login with dummy user/i,
    });
    const emailEl = screen.getByRole("textbox", { name: /Email address/i });
    const passEl = screen.getByPlaceholderText(/Password/i);

    await userEvent.click(buttonEl);

    expect(emailEl.value).toBe("johndoe@gmail.com");
    expect(passEl.value).toBe("johnDoe123");
  });

  it("should handle login when click on submit", async () => {
    const resp = {
      data: {
        foundUser: { _id: "test", cart: [], wishlist: [] },
        encodedToken: "asdhsjhd",
      },
    };
    mockAxios.post.mockResolvedValue(resp);

    render(<MockLogin />);

    const submitBtnEL = screen.getByRole("button", { name: /Submit/i });
    const emailEl = screen.getByRole("textbox", { name: /Email address/i });
    const passEl = screen.getByPlaceholderText(/Password/i);

    await userEvent.type(emailEl, "test@123.com");
    await userEvent.type(passEl, "test123");

    await act(async () => {
      userEvent.click(submitBtnEL);
    });

    expect(emailEl.value).toBe("test@123.com");
    expect(passEl.value).toBe("test123");
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });

  it("should go to signup page when click on Create new account", async () => {
    render(<MockLogin />);

    const linkEl = screen.getByRole("link", { name: /Create new account/i });

    await userEvent.click(linkEl);

    expect(window.location.pathname).toBe("/signup");
  });

  it("should show the password when click on eye icon", async () => {
    render(<MockLogin />);

    const showPasswordEl = screen.getByTestId("showPassword");

    await userEvent.click(showPasswordEl);

    const passEl = screen.getByRole("textbox", { name: /Password/i });

    expect(passEl).toBeInTheDocument;
  });
});
