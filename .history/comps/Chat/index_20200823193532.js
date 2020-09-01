import React from 'react';
import CustomHeader from '../CustomHeader';

const defaultImg = require('./default.png');

const Chat = ({msg}) => <div>
    <div className="chat_user">
        <img src={defaultImg} />
        <CustomHeader text="Username" />
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>;

Chat.defaultProps = {

}

export default Chat;