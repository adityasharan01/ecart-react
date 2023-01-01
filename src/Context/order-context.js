import { createContext, useContext, useReducer } from "react";
import { orderReducer } from "../reducers";

const OrderContext = createContext();

const useOrder = () => useContext(OrderContext);

const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    order: {},
  });
  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderProvider, useOrder, OrderContext };
