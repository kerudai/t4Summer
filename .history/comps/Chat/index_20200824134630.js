import React from 'react';
import CustomHeader from '../CustomHeader';
import './chat.css';

const defaultImg = require('./default.png');

const Chat = ({msg}) => <div>
    <div className="chat_user">
        <img src={defaultImg} />
        <CustomHeader fontSize="50%" text="Username" />
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>;

Chat.defaultProps = {
    msg: "please type someting"
}

export default Chat;