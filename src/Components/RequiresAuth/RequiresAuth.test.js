import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../../Context/auth";
import RequiresAuth from "./RequiresAuth";

describe("<RequiresAuth/> test", () => {
  const user = {
    cart: [],
    wishlist: [],
    _id: "1234",
    firstName: "Test",
    lastName: "me",
    email: "test@123.com",
  };

  it("should show children if the user is loggedIn", () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: user, setUser: jest.fn() }}>
          <RequiresAuth>
            <p>I am a children</p>
          </RequiresAuth>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    const childEl = screen.getByText(/I am a children/i);

    expect(childEl).toBeInTheDocument;
  });
});
