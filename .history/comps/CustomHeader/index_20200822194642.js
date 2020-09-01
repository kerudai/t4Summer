import React from 'react';
import './header.css';

const CustomHeader = ({fontSize,color,onMouseOver}) => <div>
    <h1>Header</h1>
</div>

function mouseOver() {
    alert("mouse is over");
}

CustomHeader.defaultProps = {
    fontSize: 16,
    color:"#DAB",
    onMouseOver:mouseOver
}

export default CustomHeader; 