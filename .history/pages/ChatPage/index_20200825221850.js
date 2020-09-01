import React, { useState } from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import CustomHeader from '../../comps/CustomHeader';
import Input from '../../comps/Input';

// var welcome = "Welcome to my app!"
// function setWelcome() {
//     welcome = "Start with sending a message!";
//     document.querySelector("#welcome").innerText = welcome;
// }

const ChatPage = ({ }) => {
    const [welcome, setWelcome] = useState("Welcome to my app!");
    const [msg, setMsg] = useState("Pls type sth!");
    const [resp, setResp] = useState("Let me respond to you.");

    return <div>
        <div id="welcome">
            <CustomHeader fontSize={32} text="Welcome to my app!" />
        </div>
        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message!");
        }}>
            <Chat name={"User1"} msg={msg}/>
            <p />
            <Chat img={"https://www.revenuepulse.com/wp-content/uploads/2018/09/chat-bot-for-social-networking.jpg"} name={"ChatBot"} backgroundColor={"#FAB"} msg={resp}/>
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                if (val === "hi") {
                    setResp("I love pie.");
                }
            }}/>
        </div>
    </div>
}

ChatPage.defaultProps = {

};

export default ChatPage;
