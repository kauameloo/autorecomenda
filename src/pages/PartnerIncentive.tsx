// src/pages/PartnerIncentive.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #f4a261;
`;

const PartnerIncentive: React.FC = () => {
  return (
    <Section>
      <Title>Incentivos para Oficinas Parceiras</Title>
      <p>
        Tornar-se uma oficina parceira da Porto Seguro traz inúmeros benefícios. Além de visibilidade garantida em nossa plataforma,
        sua oficina pode se beneficiar de suporte exclusivo, treinamentos e muito mais.
      </p>
      <p>
        Entre em contato para saber mais detalhes e fazer parte do nosso time de oficinas parceiras!
      </p>
    </Section>
  );
};

export default PartnerIncentive;
