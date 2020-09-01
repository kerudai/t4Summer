import React from 'react';
import CH2 from '../../comps/CH2';
import CB2 from '../../comps/CB2';
import C2 from '../../comps/C2';
import I2 from '../../comps/I2';
import './chatpage2.css';

const ChatPage2 = ({ }) => <div
    className="chatpage2"
>
    <div id="header">
        <CH2 onMouseOver=""/>
    </div>
    <div id="chats">
        <C2 name="User"/>
        <p></p>
        <C2 name="Chatbot" text="Let me respond to you!"/>
    </div>
    <div id="input">
        <I2 />
    </div>
    <div id="buttons">
        <CB2 />
        <CB2 />
    </div>
</div>;

ChatPage2.defaultProps = {

};

export default ChatPage2;