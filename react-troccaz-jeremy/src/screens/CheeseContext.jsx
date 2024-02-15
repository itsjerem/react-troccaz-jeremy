import { createContext } from "react";

const CheeseContext = createContext({
  cheese: [],
  isSelected: false,
});

export default CheeseContext;
