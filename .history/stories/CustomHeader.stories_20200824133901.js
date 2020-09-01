import React from 'react';
import CustomHeader from '../comps/CustomHeader';

export default {
    //The title here meant the title of this story
    title: "Custom Header",
    text: "Header Text",
    component: CustomHeader
};

//The following are variables you can name any name under this story
export const MyCustomHeader = () => <CustomHeader />
export const PageWithCustomHeaders = () => <div>
    <CustomHeader 
        onMouseOver = {headerAOver}
        fontSize = "24pt"
        color = "red"
        text = "HeaderA"
    />
    <CustomHeader 
        onMouseOver = {headerBOver}
        fontSize = "50px"
        color = "black"
        text = "HeaderB"
    />
    <CustomHeader 
        onMouseOver = {headerCOver}
        fontSize = "50%"
        color = "tomato"
        text = "HeaderC"
    />
    <CustomHeader 
        onMouseOver = {headerDOver}
        fontSize = "xx-large"
        color = "blue"
        text = "HeaderD"
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