// src/components/ChatBotIcon.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMessage } from 'react-icons/ai'; // Ícone do chatbot

interface ChatWindowProps {
  isVisible: boolean;
}

const ChatButton = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  background-color: #007BFF;
  color: white;
  border-radius: 50%;
  padding: 15px;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007BFF;
  }
`;

const ChatWindow = styled.div<ChatWindowProps>`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  padding: 1rem;
  z-index: 999;
`;

const ChatHeader = styled.div`
  background-color: #007BFF;
  padding: 10px;
  color: white;
  font-weight: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
`;

const ChatBody = styled.div`
  padding: 1rem;
  height: calc(100% - 60px);
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
`;

const ChatBotIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatButton onClick={toggleChatWindow}>
        <AiOutlineMessage />
      </ChatButton>

      <ChatWindow isVisible={isOpen}>
        <ChatHeader>
          ChatBot
          <CloseButton onClick={toggleChatWindow}>&times;</CloseButton>
        </ChatHeader>
        <ChatBody>
          <p>Olá! Como posso ajudar?</p>
          <p>Este é um exemplo visual de chatbot.</p>
        </ChatBody>
      </ChatWindow>
    </>
  );
};

export default ChatBotIcon;
