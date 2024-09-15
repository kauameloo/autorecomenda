import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: center; // Alinha todos os elementos no centro
  align-items: center;  // Centraliza verticalmente
  background-color: #007BFF;
  padding: 0;
  width: 100%;  // Ajustado de 100vw para 100%
  position: relative;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 150px;
  margin: 0;
  padding: 1rem 0; 
  display: block;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    align-self: center;
  }
`;

const NavList = styled.ul<{ open: boolean }>`
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    position: absolute;
    top: 4rem;  // Ajuste para deixar o menu logo abaixo do logo
    left: ${({ open }) => (open ? '0' : '-100vw')};  // Controla visibilidade
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background-color: #007BFF;
    padding: 1rem 2rem;
    transition: left 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
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
    width: 100%;
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo src={logo} alt="Logo AutoRecomenda" />
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes color="white" /> : <FaBars color="white" />}
      </HamburgerIcon>
      <NavList open={isOpen}>
        <NavItem>
          <StyledLink to="/" onClick={toggleMenu}>Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about" onClick={toggleMenu}>Sobre</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact" onClick={toggleMenu}>Contato</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/workshops" onClick={toggleMenu}>Oficinas</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/partners" onClick={toggleMenu}>Incentivos para Parceiros</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/group" onClick={toggleMenu}>Integrantes</StyledLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
