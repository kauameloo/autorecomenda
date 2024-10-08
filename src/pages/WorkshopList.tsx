import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;

  gap: 120px;
`;

const Title = styled.h1`
  color: #007BFF;
  font-size: 2.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WorkshopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const WorkshopCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1.5rem;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const WorkshopName = styled.h3`
  color: #264653;
`;

const WorkshopList: React.FC = () => {
  const workshops = [
    { id: 1, name: 'Oficina do Zé', location: 'São Paulo, SP', rating: 4.8 },
    { id: 2, name: 'Auto Mecânica Avenida', location: 'Rio de Janeiro, RJ', rating: 4.5 },
    { id: 3, name: 'Centro Automotivo XPTO', location: 'Belo Horizonte, MG', rating: 4.7 },
    { id: 4, name: 'Oficina do Pedro', location: 'Curitiba, PR', rating: 4.6 },
    { id: 5, name: 'Mecânica São Lucas', location: 'Porto Alegre, RS', rating: 4.4 },
    { id: 6, name: 'Auto Center Nacional', location: 'Brasília, DF', rating: 4.9 },
  ];

  return (
    <Section>
      <Title>Oficinas Próximas</Title>
      <WorkshopContainer>
        {workshops.map(workshop => (
          <WorkshopCard key={workshop.id}>
            <WorkshopName>{workshop.name}</WorkshopName>
            <p>Local: {workshop.location}</p>
            <p>Avaliação: {workshop.rating} ⭐</p>
          </WorkshopCard>
        ))}
      </WorkshopContainer>
    </Section>
  );
};

export default WorkshopList;