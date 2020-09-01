import React, { useState } from 'react';
import CH2 from '../../comps/CH2';
import CB2 from '../../comps/CB2';
import C2 from '../../comps/C2';
import I2 from '../../comps/I2';
import './chatpage2.css';

// var welcome_state = "Welcome_state to my app";
// function welcome() {
//     welcome_state = "Let's state chat!";
//     document.querySelector("#header").innerText = welcome_state;
// }
const ChatPage2 = ({ }) => {
    const [welcome, setWelcome] = useState("Welcome.");
    const [msg, setMsg] = useState("Hey!");
    const [resp, setResp] = useState("Let me respond to you!");

    return <div
        className="chatpage2"
    >
        <div id="header" onClick={() => {
            setWelcome("Let's chat!");
        }}>
            <CH2 onMouseOver="" text={welcome} />
        </div>
        <div id="chats">
            <C2 name="User" text={msg} />
            <p></p>
            <C2 name="Chatbot" color={"#FAB"} text={resp} img={"https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2018/01/robot-2192617_960_720.png"} />
        </div>
        <div id="input">
            <I2 onClick={(val) => {
                setMsg(val);
                var new_resp = checkResponse(val);
                setResp(new_resp)
                // if (val === "hi") {
                //     setResp("I love pie.");
                // }
                // alert(val);
            }} />
        </div>

    </div>
    
}
function checkResponse(inp) {
    switch (inp.toLowerCase()) {
        case "hi":
            return "I love you.";
        case "how are you?":
            return "not 2 bad";
        case "how's life?":
            return "surviving."
        default:
            return "I don't understand."
    }
}
ChatPage2.defaultProps = {
};

export default ChatPage2;