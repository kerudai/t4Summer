import React from 'react';
import './c2.css';

const C2 = ({name,img,text}) => <div>
    <div id="chat_card">
        <div id="chat_avatar">
            <div id="chat_name">{name}</div>
            <div id="chat_icon"><img src={img}/></div>
        </div>
        <div id="chat_box">
            <p>{text}</p>
        </div>
    </div>
</div>;

C2.defaultProps = {
    name:"Default",
    img: "https://lh3.googleusercontent.com/proxy/6okqn2uNXcyXCCR_iUXGxhlFyYSV-x5B8iJNihaDCG1jjT8lIvsTzx3mg22FnHBM_ryLEwkDmuEE6-aOiqUt5R7oIj7d2zRElFLe3Aexgn1e99Q",
    text: ""
};

export default C2;