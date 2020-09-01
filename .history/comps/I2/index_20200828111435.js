import React from 'react';
import './i2.css';
import { typeOf } from 'react-is';

const I2 = ({placeholder,type_text}) => <div>
    <div id="input_box">
        <input type={type_text} placeholder={placeholder}></input>
    </div>
</div>;

I2.defaultProps = {
    placeholder:"Please type!",
};

export default I2;