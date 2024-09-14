// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()} Porto Seguro Project - Todos os direitos reservados.
    </FooterWrapper>
  );
};

export default Footer;
