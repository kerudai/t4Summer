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
        fontSize = "32"
        color = "red"
    />
    <CustomHeader />
    <CustomHeader />
    <CustomHeader />
</div>

function headerAOver () {
    alert("AOver");
}