import React from 'react';
import CustomButton from '../comps/CustomButton';
import CustomHeader from '../comps/CustomHeader';
import Chat from '../comps/Chat';
import Input from '../comps/Input';

export default {
    title: "My Comps",
    component: CustomButton,CustomHeader
};

export const MyCustomButton = () => <CustomButton />
export const MyHeader = () => <Header />
export const MyChat = () => <Chat />
export const MyInput = () => <Input />

