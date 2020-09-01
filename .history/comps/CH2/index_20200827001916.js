import React from 'react';
import './ch2.css';

const CH2 = ({text,color}) => <div 
onMouseOver={onMouseOver}
className="CH2">
    <h1 style={{color:color}}>{text}</h1>
</div>;

function HeaderOver() {
    alert("Headerover!");
}

CH2.defaultProps = {
    text: "Default CH2",
    color: "teal",
    onMouseOver: HeaderOver
};

export default CH2;
