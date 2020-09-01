import React from 'react';
import CH2 from '../../comps/CH2';
import CB2 from '../../comps/CB2';
import C2 from '../../comps/C2';
import I2 from '../../comps/I2';
import './chatpage2.css';

function welcome() {
    document.querySelector("#header").innerText = "Let's chat!";
}

function noSense() {
    document.querySelector("#chats").innerText = "Fuck you!";
}
const ChatPage2 = ({}) => <div
    className="chatpage2"
>
    <div id="header" onClick={welcome}>
        <CH2 onMouseOver="" text="Welcome to my app" />
    </div>
    <div id="chats">
        <C2 name="User"/>
        <p></p>
        <C2 name="Chatbot" text="Let me respond to you!" img={"https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2018/01/robot-2192617_960_720.png"}/>
    </div>
    <div id="input" onClick={noSense}>
        <I2 />
    </div>
    <div id="buttons">
        <CB2 text="Submit"/>
        <CB2 text="Reset"/>
    </div>
</div>;

ChatPage2.defaultProps = {
};

export default ChatPage2;