import { useContext, useState } from "react";
import UserContext from "../UserContext";

const User = () => {
  const { user, login } = useContext(UserContext);

  if (!user) {
    return <button onClick={login}>Login</button>;
  }
  return (
    <div>
      <img style={{ width: 50 }} src={user?.photo} alt={user?.name} />
      <h2>{user?.name}</h2>
    </div>
  );
};

export default User;

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      name: "Rayman",
      isAdmin: true,
      photo:
        "https://ih1.redbubble.net/image.768712544.5724/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    });
  };

  const value = { user, login };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
