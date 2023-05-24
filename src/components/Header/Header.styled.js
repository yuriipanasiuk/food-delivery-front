import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Layout = styled.section`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  &.active {
    color: orange;
    text-decoration: underline;
  }
  :not(.active) {
    :hover {
      color: red;
      scale: 1.12;
    }
  }
  :not(:last-child) {
    margin-right: 18px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: end;
`;

export const NavLayout = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  margin-left: auto;
`;
