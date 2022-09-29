import { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = [
  {
    id: 1,
    name: "조연서",
  },
  {
    id: 2,
    name: "원치치",
  },
  {
    id: 3,
    name: "오진서",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STATE":
      return [...state, { id: action.id, name: action.name }];
    case "REMOVE_STATE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
