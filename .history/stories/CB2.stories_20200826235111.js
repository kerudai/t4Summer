import React from 'react';
import CB2 from '../comps/CB2';

export default {
    title: "CustomButton2",
    component: CB2
}

export const MyCB2 = () => <CB2 />
export const PageWithCB2 = () => <div>
    <CB2 
    text="OK"
    color="blue" />
    <CB2 
    text="Cancel"
    color="red" />
    <CB2 
    text="Submit"
    color="green" />
</div>