import React, { useState } from 'react';
import './i2.css';

const I2 = ({ placeholder }) => {
    const [val, setVal] = useState("");

    return <div>
        <div id="input_box">
            <input onChange={(event) =>{
                setVal(event.target.value)
            }}type="text" placeholder={placeholder}></input>
        </div>
        <button onClick={() =>{
            alert(val);
        }}>Fuck</button>
    </div>
}

I2.defaultProps = {
    placeholder: "Please type!",
};

export default I2;

// onchange, eventlishter