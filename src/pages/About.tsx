// src/pages/About.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;  // Ocupa a largura total da tela
  min-height: 100vh;  // Ocupa a altura total da tela
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;  // Centraliza verticalmente
  align-items: center;  // Centraliza horizontalmente
  background-color: #f4f4f4;  // Cor de fundo
`;

const Title = styled.h1`
  color: #2a9d8f;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  max-width: 800px;  // Limita a largura do texto para melhor leitura

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const About: React.FC = () => {
  return (
    <Section>
      <Title>Sobre Nós</Title>
      <Text>Este é o sistema de oficinas da Porto Seguro, que tem como objetivo conectar clientes a oficinas parceiras de confiança.</Text>
    </Section>
  );
};

export default About;
