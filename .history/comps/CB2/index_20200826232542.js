import React from 'react';
import './cb2.css';

const CB2 = ({text}) => <div className="CB2">
<h3>{text}</h3>
</div>;

CB2.defaultProps = {
text:"Default CB2",
fontSize: "32px"
}

export default CB2;