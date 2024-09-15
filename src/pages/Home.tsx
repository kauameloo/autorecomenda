// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;  // Ocupar a largura total da tela
  min-height: 100vh;  // Garantir que o conteúdo ocupe a altura total da tela
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4; // Cor de fundo para visualização
`;

const Title = styled.h1`
  color: #007BFF;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const Button = styled(Link)`
  background-color: #007BFF;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  margin: 0.5rem;
  text-align: center;
  display: inline-block;

  &:hover {
    color: #ccc;
    background-color: #0069D9;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

const Home: React.FC = () => {
  return (
    <Section>
      <Title>Bem-vindo ao Sistema de Oficinas Porto Seguro</Title>
      <Subtitle>Encontre oficinas confiáveis, parceiras da Porto Seguro, para manter seu veículo em ótimo estado.</Subtitle>
      <Button to="/workshops">Ver Oficinas Próximas</Button>
      <Button to="/partners">Torne-se uma Oficina Parceira</Button>
    </Section>
  );
};

export default Home;
