import CH2 from '../../comps/CH2';
import CB2 from '../../comps/CB2';
import './contact.css'

function clickIndex() {
    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function(){
        Rounter.push("/ChatPage2");
    }, 1000)
    //it means 1000 mili seconds
}

const Contact = () => <div id="mainapp">
    <CH2 text="Contact Me!" />
    <CB2 text="email" />
</div>

export default Contact;