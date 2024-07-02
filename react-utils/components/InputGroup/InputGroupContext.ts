import { createContext, useContext } from "react";

import { InputGroupProps } from "./InputGroupProps";

export const InputGroupContext = createContext<InputGroupProps>({});

export const useInputGroupContext = () => {
  const context = useContext(InputGroupContext);
  if (!context) {
    throw new Error("InputGroup compound component can not be rendered outside the inputGroup component")
  }
  return context;
}
