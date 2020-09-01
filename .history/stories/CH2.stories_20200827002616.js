import React from 'react';
import CH2 from '../comps/CH2';

export default {
    title: "Custom Header2",
    component: CH2
}

export const MyCH2 = () => <CH2 />
export const PageWithCH2 = () => <div>
    <CH2 
    color="red" 
    onMouseOver={HOR} />
    <CH2 
    color="black" 
    onMouseOver={HOBLA} />
    <CH2 
    color="blue" 
    onMouseOver={HOBLU} />
</div>

function HOR() {
    alert("redover!")
};

function HOBLA() {
    alert("blackover!")
};

function HOBLU() {
    alert("blueover!")
};