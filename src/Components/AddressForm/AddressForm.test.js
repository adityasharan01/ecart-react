import { render, screen } from "@testing-library/react";
import AddressForm from "./AddressForm";
import { AddressProvider } from "../../Context/address";
import userEvent from "@testing-library/user-event";

describe("AddressForm tests", () => {
  it("should render the component", () => {
    render(
      <AddressProvider>
        <AddressForm />
      </AddressProvider>
    );

    const headingEl = screen.getByRole("heading", { name: /Address form/i });
    const nameInput = screen.getByRole("textbox", { name: /Name/i });
    const cityInput = screen.getByRole("textbox", { name: /City/i });
    const stateInput = screen.getByRole("textbox", { name: /State/i });
    const countryInput = screen.getByRole("textbox", { name: /Country/i });
    const pinCodeInput = screen.getByRole("textbox", { name: /Pin code/i });
    const phoneNoInput = screen.getByRole("textbox", { name: /Phone number/i });

    expect(headingEl).toBeInTheDocument;
    expect(nameInput).toBeInTheDocument;
    expect(cityInput).toBeInTheDocument;
    expect(stateInput).toBeInTheDocument;
    expect(countryInput).toBeInTheDocument;
    expect(pinCodeInput).toBeInTheDocument;
    expect(phoneNoInput).toBeInTheDocument;
  });

  it("should add dummy address when click on add dummy address button", async () => {
    const toggleAddressFormMock = jest.fn();

    render(
      <AddressProvider>
        <AddressForm toggleAddressForm={toggleAddressFormMock} />
      </AddressProvider>
    );

    const btnEl = screen.getByRole("button", { name: /Add dummy address/i });
    const nameInputEl = screen.getByRole("textbox", { name: /Name/i });

    await userEvent.click(btnEl);

    expect(nameInputEl.value).toBe("Sherlock Holmes");
  });
});
