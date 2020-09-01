import React from 'react';
import CH2 from '../comps/CH2';

export default {
    title: "Custom Header2",
    component: CH2
}

export const MyCH2 = () => <CH2 />
export const PageWithCH2 = () => <div>
    <CH2 
    color="red" />
    <CH2 
    color="black" />
    <CH2 
    color="blue" />
</div>