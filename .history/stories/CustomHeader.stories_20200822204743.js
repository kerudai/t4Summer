import React from 'react';
import CustomHeader from '../comps/CustomHeader';

export default {
    //The title here meant the title of this story
    title: "Custom Header",
    component: CustomHeader
};

//The following are variables you can name any name under this story
export const MyCustomHeader = () => <CustomHeader />
export const PageWithCustomHeaders = () => <div>
    <CustomHeader 
        onMouseOver = {headerAOver}
        fontSize = "small"
        color = "red"
    />
    <CustomHeader 
        onMouseOver = {headerBOver}
        fontSize = "50px"
        color = "black"
    />
    <CustomHeader 
        onMouseOver = {headerCOver}
        fontSize = "50%"
        color = "tomato"
    />
    <CustomHeader 
        onMouseOver = {headerDOver}
        fontSize = "xx-large"
        color = "blue"
    />
</div>

function headerAOver () {
    alert("AOver");
}
function headerBOver () {
    alert("BOver");
}
function headerCOver () {
    alert("COver");
}
function headerDOver () {
    alert("DOver");
}