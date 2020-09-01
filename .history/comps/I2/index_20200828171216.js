import React, { useState } from 'react';
import './i2.css';
import CB2 from '../CB2';

const I2 = ({ placeholder }) => {
    const [val, setVal] = useState("");
    const [color, setColor] = useState("coral")

    return <div>
        <div id="input_box">
            <input onChange={(event) =>{
                setVal(event.target.value)
            }}type="text" placeholder={placeholder}></input>
        </div>
        <CB2 text="Submit" onClick={() =>{
            alert(val);
        }}/>
        <CB2 text="Reset" onClick={() =>{
            setColor("blue")
        }} color={color}/>
    </div>
}

I2.defaultProps = {
    placeholder: "Please type!",
};

export default I2;

// onchange, eventlishter