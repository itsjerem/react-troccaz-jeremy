// import styled from "@emotion/styled";

import { useContext } from "react";
import UserContext from "../UserContext";
import User from "./User";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <User />
    </header>
  );
};

// const HeaderStyled = styled(Header)`
//   background-color: #282c34;
//   color: white;
//   padding: 1rem;
//   text-align: center;
// `;

export default Header;
