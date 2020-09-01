//First step, import files.
import React from 'react';
import './cb.css';

//Second, create an UI
//The following is an UI (a button)
const CustomButton = () => <div>
    <div>
        Button
    </div>
</div>

//Third, export it
export default CustomButton;

//This is a test for showing difference between
//export const and export default
export const num = 4;
export const greetings = "hi";