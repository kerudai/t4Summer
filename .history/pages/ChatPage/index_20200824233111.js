import React, {useState} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import CustomHeader from '../../comps/CustomHeader';
import Input from '../../comps/Input';

// var welcome_state = "Welcome to my app!"
// function changeWelcome() {
//     welcome_state = "Start with sending a message!";
//     document.querySelector("#welcome").innerText = welcome_state;
// }

const ChatPage = ({}) => <div>
    <div id="welcome">
        <CustomHeader fontSize={32} text="Welcome to my app!" />
    </div>
    <div id="chats" onClick={changeWelcome}>
        <Chat />
    </div>
    <div id="controls">
        <Input />
    </div>
</div>

ChatPage.defaultProps = {

};

export default ChatPage;
