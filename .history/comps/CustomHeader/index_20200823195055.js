import React from 'react';
import './header.css';

const CustomHeader = ({text, fontSize, color, onMouseOver }) => <div
    onMouseOver={onMouseOver}
    className="header">
    <h1 style={{fontSize:fontSize,color:color}}>{text}</h1>
</div>

function mouseOver() {
    alert("mouse is over");
}

CustomHeader.defaultProps = {
    fontSize: "52pt",
    color: "green",
    onMouseOver: mouseOver,
    text: "text"
}

export default CustomHeader; 