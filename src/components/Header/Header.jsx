import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

import Container from "../Container/Container";
import { Logo, Layout, StyledLink, Nav, NavLayout } from "./Header.styled";

const Header = () => {
  return (
    <Layout as={"header"}>
      <Container>
        <Nav>
          <Link to="/">
            <Logo
              src="https://www.mcdonalds.com/content/dam/sites/ua/nfl/icons/Logo_on_white_desktop_Small.jpg"
              alt="logo"
            />
          </Link>
          <NavLayout>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/history">History</StyledLink>
            <StyledLink to="/cart">
              <HiOutlineShoppingCart size={26} />
            </StyledLink>
          </NavLayout>
        </Nav>
      </Container>
    </Layout>
  );
};

export default Header;
