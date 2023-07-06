import React from 'react';
import './Chat_Page.css';
// import butterfly from '../../images/butterfly.png';


import Chatbot from './Chatbot';

function ChatUIPage() {
  return (
    <div className='chat-ui-container'>
    {/* <img src={butterfly} alt="" /> */}
      <div className="photo">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe quasi tempora soluta ab aliquid delectus nobis laudantium quisquam placeat mollitia dolorem, inventore sint nesciunt ullam assumenda amet ipsam id.</p>
      </div>
      <div className="chatbot">
        < Chatbot />
      </div>
    </div>
  )
}

export default ChatUIPage;