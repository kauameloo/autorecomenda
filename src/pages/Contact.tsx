// src/pages/Contact.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #f4a261;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  margin: 0.5rem;
  width: 80%;
  max-width: 500px;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  margin: 0.5rem;
  width: 80%;
  max-width: 500px;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #2a9d8f;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  
  &:hover {
    background-color: #264653;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Mensagem enviada! Nome: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <Section>
      <Title>Contato</Title>
      <p>Entre em contato conosco para mais informações ou dúvidas.</p>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
      </Form>
    </Section>
  );
};

export default Contact;
