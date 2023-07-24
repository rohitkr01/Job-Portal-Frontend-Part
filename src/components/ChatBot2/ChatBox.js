import React, { useState } from 'react';
import './ChatBox.css';
import Chatbot from '../ChatBot/Chatbot';

import chatbotImg from "../../images/chatbot.png"

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbox-container">
      <div className={`chatbox-toggle ${isOpen ? 'open' : ''}`} onClick={toggleChatbot}>
        <img src={chatbotImg} width="30px"  alt="Chatbot Icon" />
      </div>
      <div className={`chat-section ${isOpen ? 'open' : ''}`}>
        {/* Your chatbot UI components go here */}
        <div className="chatbox-top">
          <div>
            <h3>Get Support</h3>
            <p>Have you doubt? Ask me anything!</p>
          </div>
          <div>
            <img src={chatbotImg} width="50px"  alt="Chatbot Icon" />
          </div>          
        </div>
        <div className="chatbot-ui">
        < Chatbot />
        </div>
        
      </div>
    </div>
  );
};

export default ChatBox;
