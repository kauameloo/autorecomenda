// src/pages/WorkshopList.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #f4a261;
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
