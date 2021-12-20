import Link from 'next/Link';
import { useRouter } from 'next/router';
import {useEffect} from 'react';
import NavBar from '../components/NavBar';

const ErrorPage = () => {

    useEffect(() => {
        setTimeout(() => {
            router.push('/');    
        }, 3000);
    }, []);

    const router =  useRouter();
    return (
        <div id="page-not-found">
            <NavBar />
            <h1> Page Not Found !!!!</h1>
            <style jsx>
            {`
            h1{
                color: cyan;
            }

            .linkCls {
                color: pink;
            }
            `}
        </style>

            <Link href="/" className="linkCls">Back To Homepage</Link>

            <a className="linkCls" onClick={() => router.push('/')}>Back To Homepage 2</a>
        </div>
    )
}

export default ErrorPage;
