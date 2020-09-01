import React from 'react';
import './c2.css';

const C2 = ({name}) => <div>
    <div id="chat_card">
        <div id="chat_avatar">
            <div id="chat_name">{name}</div>
            <div id="chat_icon"></div>
        </div>
        <div id="chat_box"></div>
    </div>
</div>;

C2.defaultProps = {
    name:"Default",
};

export default C2;