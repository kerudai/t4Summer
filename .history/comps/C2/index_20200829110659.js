import React from 'react';
import './c2.css';

const C2 = ({ name, img, text, color }) => <div
    className="C2"
    
>
    <div id="chat_card" style = {{backgroundColor:color}}>
        <div id="chat_avatar">
            <div id="chat_name">{name}</div>
            <div id="chat_icon"><img src={img} /></div>
        </div>
        <div id="chat_box">
            <p id="p">{text}</p>
        </div>
    </div>
</div>;

C2.defaultProps = {
    name: "Default",
    img: "https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg",
    text: "(Pls type sth!)",
    color: "rgba(4, 157, 4, 0.68)"
};

export default C2;