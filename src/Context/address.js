import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const AddressContext = createContext();

const useAddress = () => useContext(AddressContext);

const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([
    {
      name: "Monkey D. Luffy",
      city: "Chandrapur",
      addState: "Maharashtra",
      country: "India",
      pincode: "500099",
      phone: "123456789",
      checked: true,
      _id: uuid(),
    },
  ]);

  return (
    <AddressContext.Provider value={{ addresses, setAddresses }}>
      {children}
    </AddressContext.Provider>
  );
};

export { AddressProvider, useAddress, AddressContext };
