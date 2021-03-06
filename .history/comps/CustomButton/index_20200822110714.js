//First step, import files.
import React from 'react';
import './cb.css';

//Second, create an UI
//The following is an UI (a button)
const CustomButton = ({text, color,onClick}) => <div 
style={{backgroundColor:color,boxShadow:"1px 1px 5px " + color}}
onClick={"ButtonClick"}
className="custom_button_box">
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

function ButtonClick() {
    alert("Clicked");
}

CustomButton.defaultProps = {
    text: "Default Button",
    color: "#DAB",
    onClick: ButtonClick
}

//Third, export it
export default CustomButton;

//This is a test for showing difference between
//export const and export default
// export const num = 4;
// export const greetings = "hi";