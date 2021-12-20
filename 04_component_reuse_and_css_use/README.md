

We have created a folder named "components"(name can be anything) parallel to pages folder 
and create a new file NavBar.js 
and from pages folder => index.js

we will copy the code (the below one which is using Link component) and put on NavBar.js
now in pages folder => index.js the earlier code will be removed and will add NavBar comonent

============================================================================================================================
index.js
--------
import NavBar from '../components/NavBar';

export default function Home() {
  return (
  <NavBar />
    )
}
===========================================================

now we will also add this NavBar component in all other places
blog folder => [pageNo].js
contact folder => index.js
404.js
home.js

now when we see localhost:3000 and navigate to Home, Blog, Contact or go to error page 404
we can see NavBar there

============================================================================================================================
============================================================================================================================
Now there are following CSS ways :

1. external css
inside styles folder => globals.css (given by Next JS) => can be treated as external css
Note: this styles folder => globals.css is included in all files 

2. CSS Modules 
styles folder => Home.modules.css (given by Next JS)
this css is applicable to pages folder=> home.js
 
but css is not applied as we have not imported it in our home.js file
to use it 

lets first delete contents inside styles folder => Home.modules.css
and add below code 


Home.module.css
--------------
.heading1 {
  background-color: red;
}

/*
h2 {
  background-color: green;
}
 */

 .footer_homepage {
   font-size: 30px;
 }
 .copyright {
   background-color: blue;
 }

 .copyright_text {
   text-transform: uppercase;
 }

----------------------------------------------------------------------------------
Also we will modify home.js as below : 

home.js
--------
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';
const Home = () => {
    return (
      <>
      <NavBar />
        <h1>
         <span className={styles.heading1}> This is Home Page   </span>
        </h1>
        <h2> This is heading2 in homepage</h2>
       <div className={`${styles.footer_homepage} ${styles.copyright} ${styles.copyright_text}`}>
         This is copyright by ...
       </div>
        </>
    )
}
export default Home;
----------------------------------------------------------------------------------

Now if we go to browser we will see an error => Selector "h2" is not pure (pure selectors must contain at least one local class or id)

so in css modules without className or id we cant write css like

/*
h2  {
   background-color: green; 
}
*/
so we will comment it now

Note : to use multiple classes on same element backtick character is used 
- see  => <div className={`${styles.footer_homepage} ${styles.copyright} ${styles.copyright_text}`}>

Similarly we can use css in other files like contact.js, 404.js, [pageNo].js etc
lets do for pages => blog => [pageNo].js

Inside styles folder => create a new folder "blog" => create a new file file [pageNo].module.css
---------------------------------
[pageNo].module.css
-----------------
.errorPage {
    background-color: orange;
}
--------------------------------

now we will modify pages folder => bolg folder => [pageNo].js file as below :
---------------------------------------------------------
import {useRouter} from 'next/router';
import NavBar from '../../components/NavBar';
import styles from '../../styles/blog/[pageNo].module.css';

const PageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    return (
        <>
        <NavBar />
        <h1 className={styles.errorPage}>
            This is Blog {pageNumber}
        </h1>
        </>
    )
}

export default PageNo;
--------------------------------------------------------


3. Inline CSS
pages => contact => index.js
  <h1 style={{color: "green"}}> This is Contact Page  </h1>

4. styled-jsx
pages => 404.js

--------------------------------------------

404.js
--------

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
-----------------------------------------------
the code inside 
  <style jsx>
      .....
      </style>
is styles-jsx css

So these were 4 ways of writing css in Next JS