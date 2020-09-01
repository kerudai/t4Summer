import React from 'react';
import CustomButton from '../comps/CustomButton';
// import CustomButton, {num, greetings} from '../comps/CustomButton';

export default {
    title: "Custom Button",
    component: CustomButton
};

// alert(num + greetings);
export const MyCustomButton = () => <CustomButton />
export const PageWithCustomButtons = () => <div>
<CustomButton
    onClick = {cancelClick}
    color="#999"
    text="Cancel"/>
<CustomButton
    onClick = {okClick}
    color="#3F5"
    text="OK"/>
<CustomButton
    onClick = {submitClick}
    color="#F3F"
    text="Submit"/>
<CustomButton
    onClick = {menuClick}
    color="#222"
    text="Menu"/>
</div>

function cancelClick() {
    alert("Canceled");
}

function okClick() {
    alert("ok");
}

function submitClick() {
    alert("submit");
}

function menuClick() {
    alert("menu");
}
