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
    img: "https://w7.pngwing.com/pngs/766/65/png-transparent-microsoft-account-msn-google-account-windows-10-microsoft-text-trademark-account.png",
    text: "(Pls type sth!)"
};

export default C2;