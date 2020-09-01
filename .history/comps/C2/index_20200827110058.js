import React from 'react';
import './c2.css';

const C2 = ({name,img}) => <div>
    <div id="chat_card">
        <div id="chat_avatar">
            <div id="chat_name">{name}</div>
            <div id="chat_icon" img={img}></div>
        </div>
        <div id="chat_box"></div>
    </div>
</div>;

C2.defaultProps = {
    name:"Default",
    img: "https://lh3.googleusercontent.com/proxy/5JKpzcAL3r4ydG0oLhIRfJhogxp5jx_0VMUqcdCLpB39lX0LZHepj8Z5EhJpFmRLtomMu8cw_zM",
    
};

export default C2;