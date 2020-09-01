import React from 'react';
import './c2.css';

const C2 = ({ name, img, text }) => <div
    className="C2"
>
    <div id="chat_card">
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
    text: "(Pls type sth!)"
};

export default C2;