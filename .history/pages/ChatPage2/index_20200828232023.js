import React, { useState } from 'react';
import CH2 from '../../comps/CH2';
import CB2 from '../../comps/CB2';
import C2 from '../../comps/C2';
import I2 from '../../comps/I2';
import './chatpage2.css';

// var welcome_state = "Welcome_state to my app";
// function welcome() {
//     welcome_state = "Let's state chat!";
//     document.querySelector("#header").innerText = welcome_state;
// }
const ChatPage2 = ({}) => {
    const [welcome, setWelcome] = useState("Welcome.");
    const [msg, setMsg] = useState("");

    return <div
        className="chatpage2"
    >
        <div id="header" onClick={() => {
            setWelcome("Let's chat!");
        }}>
            <CH2 onMouseOver="" text={welcome} />
        </div>
        <div id="chats">
            <C2 name="User" />
            <p></p>
            <C2 name="Chatbot" text="Let me respond to you!" img={"https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2018/01/robot-2192617_960_720.png"} />
        </div>
        <div id="input">
            <I2 onClick={(val)=>{
                setMsg(val);
                alert(val);
            }}/>
        </div>
        
    </div>
}

ChatPage2.defaultProps = {
};

export default ChatPage2;