import React from 'react';
import CB2 from '../comps/CB2';

export default {
    title: "CustomButton2",
    component: CB2
}

export const MyCB2 = () => <CB2 />
export const PageWithCB2 = () => <div>
    <CB2 
    text="OK" />
    <CB2 
    text="Cancel" />
    <CB2 
    text="Submit" />
</div>