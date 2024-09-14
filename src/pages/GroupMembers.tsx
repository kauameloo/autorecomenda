// src/pages/GroupMembers.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #f4a261;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const MemberCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1.5rem;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const MemberName = styled.h3`
  color: #264653;
`;

const GroupMembers: React.FC = () => {
  const members = [
    { id: 1, name: 'João Silva', role: 'Desenvolvedor Front-End' },
    { id: 2, name: 'Maria Souza', role: 'Desenvolvedora Back-End' },
    { id: 3, name: 'Carlos Pereira', role: 'UX/UI Designer' },
  ];

  return (
    <Section>
      <Title>Integrantes do Projeto</Title>
      <MemberContainer>
        {members.map(member => (
          <MemberCard key={member.id}>
            <MemberName>{member.name}</MemberName>
            <p>Função: {member.role}</p>
          </MemberCard>
        ))}
      </MemberContainer>
    </Section>
  );
};

export default GroupMembers;
