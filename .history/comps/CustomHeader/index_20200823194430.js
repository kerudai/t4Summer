import React from 'react';
import './header.css';

const CustomHeader = ({text, fontSize, color, onMouseOver }) => <div
    style={{color:color,fontSize:fontSize}}
    onMouseOver={onMouseOver}
    className="header">
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>

function mouseOver() {
    alert("mouse is over");
}

CustomHeader.defaultProps = {
    fontSize: "12pt",
    color: "green",
    onMouseOver: mouseOver
}

export default CustomHeader; 