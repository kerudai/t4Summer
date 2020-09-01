import CH2 from '../../comps/CH2';
import CB2 from '../../comps/CB2';
import './contact.css';
import Router from 'next/router';
import {useEffect} from 'react';



const Contact = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#contactpage").style.left = 0;
        }, 50);
    }, []);
return <div id="contactpage" onClick={clickIndex}>
    <CH2 text="Contact Me!" onMouseOver=""/>
    <CB2 text="email" />
</div>
}

Contact.defaultProps = {

}

export default Contact;