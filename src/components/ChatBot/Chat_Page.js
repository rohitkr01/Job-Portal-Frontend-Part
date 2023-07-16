import React from 'react';
import './Chat_Page.css';
// import butterfly from '../../images/butterfly.png';


import Chatbot from './Chatbot';

function ChatUIPage() {
  return (
    <div className='chat-ui-container'>
    {/* <img src={butterfly} alt="" /> */}
      <div className="chatNavSection-tittle">
        <p>Have you any dought? Want a conversation with Bot. </p>
      </div>
      <div className="chatbot-section-container">
        < Chatbot />
      </div>
    </div>
  )
}

export default ChatUIPage;