// src/pages/About.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #f4a261;
`;

const About: React.FC = () => {
  return (
    <Section>
      <Title>Sobre o Projeto Porto Seguro</Title>
      <p>
        O Sistema de Oficinas Porto Seguro foi criado para facilitar a busca por oficinas automotivas confiáveis,
        oferecendo serviços de qualidade para manter seu carro seguro e funcionando perfeitamente.
      </p>
    </Section>
  );
};

export default About;
