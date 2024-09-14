// src/pages/Group.tsx
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

const MemberList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberItem = styled.li`
  font-size: 1.5rem;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Group: React.FC = () => {
  return (
    <Section>
      <Title>Integrantes do Projeto</Title>
      <MemberList>
        <MemberItem>João Silva</MemberItem>
        <MemberItem>Maria Oliveira</MemberItem>
        <MemberItem>Carlos Pereira</MemberItem>
        <MemberItem>Ana Costa</MemberItem>
      </MemberList>
    </Section>
  );
};

export default Group;
