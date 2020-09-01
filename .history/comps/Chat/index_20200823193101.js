import React from 'react';
import CustomHeader from '../CustomHeader';

const defaultImg = require('./default.png');

const Chat = ({}) => <div>
    <img src={defaultImg} />
    <CustomHeader text="Username"/>
</div>;

Chat.defaultProps = {

}

export default Chat;