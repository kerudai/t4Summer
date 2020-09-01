import React from 'react';
import CustomButton from '../comps/CustomButton';
import CustomHeader from '../comps/CustomHeader';
import Chat from '../comps/Chat';
import Input from '../comps/Input';

export default {
    title: "My Comps",
    component: CustomButton
};

export const MyCustomButton = () => <CustomButton />

export const MyCustomButtonWithOptions = () => <CustomButton
    onClick={cancelClick}
    color="#999"
    text="Cancel"
    />

export const MyHeader = () => <CustomHeader />

export const MyChat = () => <Chat />

export const MyInput = () => <Input />

export const MyInputWithPlaceholder = () => <Input
    placeholder='Custom placeholder'
/>


function cancelClick() {
    alert("Canceled");
}
