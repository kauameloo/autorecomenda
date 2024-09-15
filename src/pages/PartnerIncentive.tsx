import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  color: #007BFF;
  font-size: 2.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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

const Text = styled.p`
  font-size: 1.5rem;
  text-align: left;
  max-width: 800px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContactSection = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const ContactMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ContactButton = styled(Link)`
  padding: 0.8rem 1.5rem;
  background-color: #007BFF;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Incentives: React.FC = () => {
  return (
    <Section>
      <Container>
        <Title>Por que fazer parte do nosso time?</Title>

        <Text>
          <strong>Programa de Incentivos e Bonificações:</strong> 
          Oferecemos descontos em produtos e serviços, como peças, ferramentas e insumos, para oficinas parceiras que demonstram 
          fidelidade ao sistema da seguradora. Além disso, premiamos oficinas com bom desempenho por meio de bonificações baseadas 
          na qualidade dos serviços prestados, como avaliações de clientes e cumprimento de prazos.
        </Text>

        <Text>
          <strong>Treinamento e Certificações:</strong>
          Disponibilizamos programas de treinamento, presenciais e online, para garantir que as oficinas estejam sempre atualizadas 
          com as melhores práticas e novas tecnologias automotivas. Além disso, oferecemos certificações exclusivas reconhecidas pela 
          seguradora, que destacam a oficina como um centro de excelência.
        </Text>

        <Text>
          <strong>Sistema de Gestão Financeira:</strong>
          Nossas ferramentas financeiras permitem pagamentos rápidos e simplificados para serviços prestados. Também oferecemos 
          recursos para o controle de custos operacionais, ajudando as oficinas a prever lucros e otimizar a gestão financeira.
        </Text>

        {/* Seção de Contato */}
        <ContactSection>
          <ContactMessage>Interessado? Entre em contato conosco!</ContactMessage>
          <ContactButton to="/contact">Fale Conosco</ContactButton>
        </ContactSection>
      </Container>
    </Section>
  );
};

export default Incentives;
