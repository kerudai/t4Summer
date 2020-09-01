import React from 'react';
import './header.css';

const CustomHeader = ({ fontSize, color, onMouseOver }) => <div
    style={{color:color, fontSize:fontSize}}
    onMouseOver={onMouseOver}
    className="header">
    <h1>Header</h1>
</div>

function mouseOver() {
    alert("mouse is over");
}

CustomHeader.defaultProps = {
    fontSize: 12,
    color: "green",
    onMouseOver: mouseOver
}

export default CustomHeader; 