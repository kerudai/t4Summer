import React from 'react';
import CustomHeader from '../CustomHeader';
import './chat.css';

const defaultImg = require('./default.png');

const Chat = ({msg, img, name, backgroundColor}) => <div 
style={{backgroundColor:backgroundColor}}
className="chat_card">
    <div className="chat_user">
        <img src={img} />
        <CustomHeader fontSize="100%" text={name} />
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>;

Chat.defaultProps = {
    msg: "please type someting",
    img: defaultImg,
    backgroundColor: "#EEE",
    name: "Username"
}

export default Chat;