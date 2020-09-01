import React from 'react';
import './cb2.css';

const CB2 = ({text,fontSize,color}) => <div 
style={{backgroundColor:color}}
onClick={onClick}
className="CB2">
<h2 style={{fontSize:fontSize}}>{text}</h2>
</div>;

function ClickButton() {
    alert("You just clicked!");
}

CB2.defaultProps = {
text:"Default CB2",
fontSize: "22px",
color:"coral",
onClick: ClickButton
}

export default CB2;