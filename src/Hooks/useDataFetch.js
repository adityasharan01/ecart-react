import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
  }
};

export const useDataFetch = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(reducer, {
    data: initialData,
    isError: false,
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const res = await axios.get(url);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      } catch (e) {
        dispatch({ type: "FETCH_ERROR" });
      }
    })();
  }, [url]);

  return [state, setUrl];
};
