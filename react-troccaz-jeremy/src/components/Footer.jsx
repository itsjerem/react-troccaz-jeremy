import { useContext } from "react";
import UserContext from "../UserContext";

const Footer = ({ onClick }) => {
  const user = useContext(UserContext);
  return (
    <footer onClick={onClick}>
      <p>Logged in as: {user?.name}</p>
      <p>© 2021 Jeremy Troccaz</p>
    </footer>
  );
};

export default Footer;
