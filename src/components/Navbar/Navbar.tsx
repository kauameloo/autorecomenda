// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2a9d8f;
  padding: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about">Sobre</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact">Contato</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/workshops">Oficinas</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/partners">Incentivos para Parceiros</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/group">Integrantes</StyledLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
