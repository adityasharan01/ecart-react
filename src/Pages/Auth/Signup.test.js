import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/auth";
import Signup from "./Signup";
import mockAxios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

describe("<Signup/> tests", () => {
  const MockSignup = () => {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Signup />
        </AuthProvider>
      </BrowserRouter>
    );
  };

  it("should render the component", () => {
    render(<MockSignup />);

    const headingEl = screen.getByRole("heading", { name: /Signup/i });

    expect(headingEl).toBeInTheDocument;
  });

  it("should signup the user when click on create account", async () => {
    const resp = {
      data: {
        foundUser: { _id: "test", cart: [], wishlist: [] },
        encodedToken: "asdhsjhd",
      },
    };
    mockAxios.post.mockResolvedValue(resp);

    render(<MockSignup />);

    const emailEl = screen.getByRole("textbox", { name: /Email address/i });
    const firstNameEl = screen.getByRole("textbox", { name: /First Name/i });
    const lastNameEl = screen.getByRole("textbox", { name: /Last Name/i });
    const passEl = screen.getByPlaceholderText("Password");
    const confirmPassEl = screen.getByPlaceholderText(/Confirm Password/i);
    const signupBtnEl = screen.getByRole("button", {
      name: /Create new account/i,
    });

    await userEvent.type(emailEl, "test@123.com");
    await userEvent.type(firstNameEl, "test");
    await userEvent.type(lastNameEl, "me");
    await userEvent.type(passEl, "test123");
    await userEvent.type(confirmPassEl, "test123");
    await act(async () => {
      userEvent.click(signupBtnEl);
    });

    expect(emailEl.value).toBe("test@123.com");
    expect(firstNameEl.value).toBe("test");
    expect(lastNameEl.value).toBe("me");
    expect(passEl.value).toBe("test123");
    expect(confirmPassEl.value).toBe("test123");
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });

  it("should throw error if signup api is failed when click on create account", async () => {
    mockAxios.post.mockRejectedValue(new Error("Something went wrong"));

    render(<MockSignup />);

    const emailEl = screen.getByRole("textbox", { name: /Email address/i });
    const firstNameEl = screen.getByRole("textbox", { name: /First Name/i });
    const lastNameEl = screen.getByRole("textbox", { name: /Last Name/i });
    const passEl = screen.getByPlaceholderText("Password");
    const confirmPassEl = screen.getByPlaceholderText(/Confirm Password/i);
    const signupBtnEl = screen.getByRole("button", {
      name: /Create new account/i,
    });

    await userEvent.type(emailEl, "test@123.com");
    await userEvent.type(firstNameEl, "test");
    await userEvent.type(lastNameEl, "me");
    await userEvent.type(passEl, "test123");
    await userEvent.type(confirmPassEl, "test123");
    await act(async () => {
      userEvent.click(signupBtnEl);
    });

    expect(emailEl.value).toBe("test@123.com");
    expect(firstNameEl.value).toBe("test");
    expect(lastNameEl.value).toBe("me");
    expect(passEl.value).toBe("test123");
    expect(confirmPassEl.value).toBe("test123");
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });

  it("should show the password when click on eye icon", async () => {
    render(<MockSignup />);

    const showPasswordEl = screen.getByTestId("showPassword");

    await userEvent.click(showPasswordEl);

    const passEl = screen.getByRole("textbox", { name: /Password/i });

    expect(passEl).toBeInTheDocument;
  });

  it("should show error when password and confirm password is not same", async () => {
    render(<MockSignup />);

    const passEl = screen.getByPlaceholderText("Password");
    const confirmPassEl = screen.getByPlaceholderText(/Confirm Password/i);

    await userEvent.type(passEl, "test123");
    await userEvent.type(confirmPassEl, "test13");

    const errorMsg = screen.getByTestId("errorMessage");

    expect(passEl.value).toBe("test123");
    expect(confirmPassEl.value).toBe("test13");
    expect(errorMsg).toBeInTheDocument;
  });
});
