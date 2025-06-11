import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  padding: 0;
`;

const NavContainer = styled.div`
  max-width: 1400px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 2rem;
`;

const Logo = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 30px;
  gap: 0.3rem;
  color: var(--text-primary);
  cursor: pointer;

  img {
    height: 2.3rem;
    width: auto;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.div<{ $active: boolean }>`
  text-decoration: ${(props) => (props.$active ? "underline" : "none")};
  text-decoration-style: ${(props) => (props.$active ? "dotted" : "none")};
  text-decoration-thickness: ${(props) => (props.$active ? "2px" : "none")};
  text-underline-offset: 0.25em;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1.05rem;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-decoration-style: solid;
    text-underline-offset: 0.25em;
    color: var(--text-primary);
    transform: translateY(-1.5px);
  }
`;

const GetStartedButton = styled.div`
  background: black;
  color: white;
  padding: 0.85rem 1.8rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1.5px);
  }
`;

const Navbar: React.FC = () => {
  const location = useLocation();

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <Nav>
      <NavContainer>
        <Logo className="ginto" onClick={() => handleNavigation("/")}>
          <img src="/logo.svg" alt="Bind Logo" />
          Bind
        </Logo>
        <NavMenu>
          <NavItem>
            <NavLink
              $active={location.pathname === "/about"}
              onClick={() => handleNavigation("/about")}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              $active={location.pathname === "/portfolio"}
              onClick={() => handleNavigation("/portfolio")}
            >
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              $active={location.pathname === "/blog"}
              onClick={() => handleNavigation("/blog")}
            >
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              $active={location.pathname === "/faq"}
              onClick={() => handleNavigation("/faq")}
            >
              FAQ
            </NavLink>
          </NavItem>
        </NavMenu>
        <GetStartedButton onClick={() => handleNavigation("/signup")}>
          Get Started
        </GetStartedButton>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
