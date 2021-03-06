import React from 'react';
import './cb2.css';

const CB2 = ({text,fontSize,color}) => <div 
style={{backgroundColor:color}}
className="CB2">
<h2 style={{fontSize:fontSize}}>{text}</h2>
</div>;

CB2.defaultProps = {
text:"Default CB2",
fontSize: "22px",
color:"coral"
}

export default CB2;