import React from 'react';
import './ch2.css';

const CH2 = ({text,color}) => <div className="CH2">
    <h1 style={{color:color}}>{text}</h1>
</div>;

CH2.defaultProps = {
    text: "Default CH2",
    color: "teal"
};

export default CH2;
