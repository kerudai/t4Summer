import React from 'react';
import './header.css';

const Header = ({fontSize,color,onMouseOver}) => <div>
    <h1>Header</h1>
</div>

function mouseOver() {
    alert("mouse is over")
}

Header.defaultProps = {
    fontSize: 16,
    color:"#DAB",
    onMouseOver:mouseOver
}

export default CustomHeader; 