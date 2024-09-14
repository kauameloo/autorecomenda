// src/pages/WorkshopList.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  color: #2a9d8f;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WorkshopList: React.FC = () => {
  return (
    <Section>
      <Title>Oficinas Parceiras</Title>
      <p>Aqui está uma lista de oficinas parceiras da Porto Seguro.</p>
    </Section>
  );
};

export default WorkshopList;
