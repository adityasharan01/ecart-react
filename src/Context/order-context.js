import { createContext, useContext, useReducer } from "react";

const OrderContext = createContext();

const useOrder = () => useContext(OrderContext);

const orderReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SAVE_ORDER":
      return {
        ...state,
        order: payload,
      };
    case "CLEAR_ORDERS":
      return {
        ...state,
        order: {},
      };
  }
};

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

export { OrderProvider, useOrder };
