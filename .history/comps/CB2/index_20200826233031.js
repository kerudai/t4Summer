import React from 'react';
import './cb2.css';

const CB2 = ({text,fontSize}) => <div className="CB2">
<h3 style={{fontSize:fontSize}}>{text}</h3>
</div>;

CB2.defaultProps = {
text:"Default CB2",
fontSize: "22px"
}

export default CB2;