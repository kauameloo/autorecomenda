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

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: #007BFF;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.div`
  flex: 1;
  margin-right: 2rem;
  text-align: left;

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-right: 0;
  }
`;

const About: React.FC = () => {
  return (
    <Section>
      <Title>Sobre Nós</Title>
      <Container>
        <Text>
          <p>
            AutoRecomenda é uma plataforma de classificação de oficinas automotivas que visa conectar os melhores
            serviços automotivos aos clientes. Acreditamos na qualidade, transparência e facilidade para o consumidor.
          </p>
          <p>
            Com uma rede de oficinas altamente recomendadas, garantimos que você encontre os melhores serviços para
            cuidar do seu carro. Nosso objetivo é garantir a confiança e a satisfação dos nossos clientes.
          </p>
          <p>
            Fundada em 2024, nossa missão é construir um ambiente seguro e confiável para todos os motoristas.
          </p>
        </Text>
      </Container>
    </Section>
  );
};

export default About;
