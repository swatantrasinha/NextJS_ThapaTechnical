except node_modules and yarn.lock copy all files from folder "02_folder_structure_and_routing" => folder-structure-and-routing to
 "03_Link_Component_create_navbar" => "link-component-and-redirection"
 and then 
 npm install
 yarn dev

Now we will make changes here 

#9 Link Component | Create Navbar without Page Refresh
========================================================

in index.js
we have 2 navs
above nav is without Link component and on click of it, page loads server-side
below nav is with Link component and on click of it, page loads client-side


#10 Create our won 404 Error page
==================================

now we will see how to create custom error page
if we go to localhost:3000/xyz

it will take to a page which says => 404 page not found

to customize this we need to create a file 404.js inside pages folder

------------------------------------------------------------
import Link from 'next/Link';
import { useRouter } from 'next/router';

const ErrorPage = () => {
    const router =  useRouter();
    return (
        <div id="page-not-found">
            <h1> Page Not Found !!!!</h1>

            <Link href="/" className="linkCls">Back To Homepage</Link>

            <a className="linkCls" onClick={() => router.push('/')}>Back To Homepage 2</a>
        </div>
    )
}

export default ErrorPage;
------------------------------------------------------------
Note : there are 2 links to go to homepage "Back To Homepage" and "Back To Homepage 2"

Back To Homepage  => use of Link Component from 'next/Link'
Back To Homepage 2 => using useRouter from 'next/router'

now if we do : 
localhost:3000/xyz => it will show content in 404.js 

now the next task is to redirect to homepage automatically without any button click after 3 sec

for this we will use useEffect hook in 404.js

    useEffect(() => {
        setTimeout(() => {
            router.push('/');    
        }, 3000);
    }, []);

so total 3 ways to redirect to homepage from error page 404


Here we can see only in main page localhost:3000 we have <nav> and not in other pages
so next we will see 
- how to add nav in all pages (using component)
- how to use CSS (external, internal, styled) way
we will see these in next folder - "component-reuse-and-types-of-css-"








