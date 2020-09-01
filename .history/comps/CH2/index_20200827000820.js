import React from 'react';
import './ch2.css';

const CH2 = ({text}) => <div className="CH2">
    {text}
</div>;

CH2.defaultProps = {
    text: "Default CH2",
};

export default CH2;