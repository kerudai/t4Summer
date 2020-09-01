import React, {useState} from 'react';
import './i2.css';

const I2 = ({placeholder,type_text}) => <div>
    <div id="input_box">
        <input type="text" placeholder={placeholder}></input>
    </div>
</div>;

I2.defaultProps = {
    placeholder:"Please type!",
};

export default I2;

// onchange, eventlishter