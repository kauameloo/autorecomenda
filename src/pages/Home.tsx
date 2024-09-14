// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #2a9d8f;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  background-color: #264653;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  margin: 0.5rem;
  display: inline-block;

  &:hover {
    background-color: #2a9d8f;
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
