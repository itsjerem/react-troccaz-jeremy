import { createContext } from "react";

const UserContext = createContext({
  user: null,
  isConnected: false,
  login: () => {}, // no op
});

export default UserContext;
