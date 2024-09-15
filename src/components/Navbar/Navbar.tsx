// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.svg'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007BFF;
  padding: 1rem;
  width: 100vw;  // Garantindo que ocupe a largura total da tela
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <img src={logo} width="200px" alt="" />
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
