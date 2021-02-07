// import React from 'react';
import { ChatEngine }  from 'react-chat-engine';

import ChatFeed from './component/ChatFeed';
import LoginForm from './component/LoginForm';

import './style.css';



const Chat = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
       <ChatEngine 
        height="100vh"
        projectID="db7d1ab2-6748-476e-bbb7-3dfe45c63415"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed= {(chatAppProps) => <ChatFeed  {... chatAppProps }  />}
       />
    );
}

export default Chat;