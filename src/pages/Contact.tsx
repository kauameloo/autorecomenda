import React, { useState } from 'react';
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
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Info = styled.div`
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

const FormContainer = styled.div`
  flex: 1;
`;

const FormTitle = styled.h2`
  color: #007BFF;
  margin-bottom: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FormDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input,
  textarea {
    margin-bottom: 1rem;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fafafa;
    width: 100%;
  }

  button {
    padding: 0.75rem;
    background-color: #007BFF;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #007BFF;
    }
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Formulário enviado com sucesso!');
  };

  return (
    <Section>
      <Title>Contato</Title>
      <Container>
        <Info>
          <p><strong>Telefone:</strong> (11) 98765-4321</p>
          <p><strong>Email:</strong> contato@autorecomenda.com</p>
          <p><strong>Endereço:</strong> Rua ABC, 123 – São Paulo, SP</p>
          <p><strong>CEP:</strong> 05825-000</p>
        </Info>

        <FormContainer>
          <FormTitle>Entre em Contato</FormTitle>
          <FormDescription>
            Tire suas dúvidas, deixe sugestões ou nos dê um alô! Estamos aqui para ajudar.
            Preencha o formulário abaixo e entraremos em contato o mais breve possível.
          </FormDescription>

          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Celular"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Escreva sua mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Enviar</button>
          </Form>
        </FormContainer>
      </Container>
    </Section>
  );
};

export default Contact;
