import Link from 'next/link';
import './app.css';
import Router from 'next/router';

function clickIndex () {
    if (confirm("Are you sure?")) {
        //move to next page
        Rounter.push("/ChatPage2");
    }
}
const Index = () => <div>
    <div onClick={clickIndex}>Index</div>

    <Link href='/ChatPage2'><button>Chats!</button></Link>
</div>

export default Index;