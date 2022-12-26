import { render, screen } from "@testing-library/react";
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
  checked: true,
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

  it("should select the address", async () => {
    render(
      <AddressProvider>
        <AddressCard address={address} />
      </AddressProvider>
    );

    const addressCard = screen.getByRole("heading", {
      name: /Monkey D. Luffy/i,
    });
    const radioEl = screen.getByRole("radio");

    await userEvent.click(addressCard);

    expect(radioEl).toBeChecked;
  });
});
