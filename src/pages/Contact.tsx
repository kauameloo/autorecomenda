// src/pages/Contact.tsx
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

const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Contact: React.FC = () => {
  return (
    <Section>
      <Title>Contato</Title>
      <Text>Para mais informações, entre em contato conosco através do email: contato@portoseguro.com.br</Text>
    </Section>
  );
};

export default Contact;
