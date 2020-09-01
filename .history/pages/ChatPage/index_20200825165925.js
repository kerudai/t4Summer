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
    const [msg, setMsg] = useState("");

    return <div>
        <div id="welcome">
            <CustomHeader fontSize={32} text="Welcome to my app!" />
        </div>
        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message!");
        }}>
            <Chat msg={msg}/>
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                alert(val);
            }}/>
        </div>
    </div>
}

ChatPage.defaultProps = {

};

export default ChatPage;
