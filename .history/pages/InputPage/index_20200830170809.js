import I2 from '../../comps/I2';
import './inputpage.css';
import Router from 'next/router';

function returnIndex() {
    Router.push("/");
}
const InputPage =()=> <div>
    <I2 />
    Fuck
    <div onClick={returnIndex}>Return</div>
</div>

export default I2;