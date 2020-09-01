import CH2 from '../../comps/CH2';
import CB2 from '../../comps/CB2';
import './contact.css';
import Router from 'next/router';

function clickIndex() {
    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage2");
    }, 1000)
    //it means 1000 mili seconds
}

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