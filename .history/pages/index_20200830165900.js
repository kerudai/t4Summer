import Link from 'next/link';
import './app.css';
import Router from 'next/router';

function clickIndex () {
    if (confirm("Are you sure?")) {
        //move to next page
        Router.push("/ChatPage2");
    }
}

function clickInput() {
    if(confirm("Are you sure again?")) {
        Router.push("/InputPage");
    }
}
const Index = () => <div>
    <div onClick={clickIndex}>Index</div>
    <div onClick={clickInput}>Input</div>

    <Link href='/ChatPage2'><button>Chats2!</button></Link>
    <Link href='/Contact'><button>Contact Me</button></Link>
    <Link href='/ChatPage'><button>Chats1!</button></Link>
</div>

export default Index;