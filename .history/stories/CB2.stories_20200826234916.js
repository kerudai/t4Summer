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
    color="yellow" />
    <CB2 
    text="Cancel"
    color="" />
    <CB2 
    text="Submit"
    color="" />
</div>