// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  
  &:hover {
    color: #f4a261;
  }
`;

const Header: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
      <NavLink to="/partner-incentive">Incentivo para Oficinas</NavLink>
      <NavLink to="/workshop-list">Lista de Oficinas</NavLink>
      <NavLink to="/contact">Contato</NavLink>
      <NavLink to="/group-members">Integrantes</NavLink>
    </Nav>
  );
};

export default Header;
