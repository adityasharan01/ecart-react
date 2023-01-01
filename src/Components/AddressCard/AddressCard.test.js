import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddressProvider } from "../../Context/address";
import AddressCard from "./AddressCard";

const address = {
  name: "Monkey D. Luffy",
  city: "Chandrapur",
  addState: "Maharashtra",
  country: "India",
  pincode: "500099",
  phone: "123456789",
  checked: false,
  _id: "ajsdgjasgdu1827128",
};

describe("AddressCard tests", () => {
  it("should render the component", () => {
    render(
      <AddressProvider>
        <AddressCard address={address} />
      </AddressProvider>
    );

    const addressCard = screen.getByRole("heading", {
      name: /Monkey D. Luffy/i,
    });

    expect(addressCard).toBeInTheDocument;
  });

  it("should select the address when click on address", async () => {
    render(
      <AddressProvider>
        <AddressCard address={address} />
      </AddressProvider>
    );

    const radioEl = screen.getByRole("radio", { name: /Monkey D. Luffy/i });

    expect(radioEl).not.toBeChecked;

    await userEvent.click(radioEl);

    expect(radioEl).toBeChecked;
  });
});
