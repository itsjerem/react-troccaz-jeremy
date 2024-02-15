import styled from "@emotion/styled";
// import User from "./User";

const Header = () => {
  return (
    <HeaderStyled>
      <h1>Users</h1>
      {/* <User /> */}
    </HeaderStyled>
  );
};

const HeaderStyled = styled(Header)`
  background-color: #282c34;
  color: white;
  padding: 1rem;
  text-align: center;
`;

export default Header;
