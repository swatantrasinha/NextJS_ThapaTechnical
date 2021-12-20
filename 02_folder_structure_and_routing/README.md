#6 Next JS - Understanding File Based Routing
==============================================

Routing in Next JS : File Based Routing mechanism
When a file is added to the pages folder in a project, by default all files becomes available as a route.


inside pages folder 
1. create a file home.js 
----------------------------
const Home = () => {
    return (
        <h1>
          This is Home Page  
        </h1>
    )
}
export default Home;
----------------------------
now localhost:3000/home - it will show =>  This is Home Page  


2. create a folder "contact" and inside it create index.js
------------------------------------------------------------

----------------------------
const Contact = () => {
    return (
        <h1>
          This is Contact Page  
        </h1>
    )
}
export default Contact;
----------------------------

now localhost:3000/contact - it will show =>  This is Contact Page


#8 Next.JS Dynamic Routing
===========================
for dynamic route we have to use a special file convention which is square bracket []

inside pages => create a folder "blog"
inside this folder create a file with name => [pageNo].js

----------------------------------------------------
import {useRouter} from 'next/router';
const PageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    return (
        <h1>
            This is Blog {pageNumber}
        </h1>
    )
}
export default PageNo;
----------------------------------------------------


now in url : 
http://localhost:3000/blog/99 => This is Blog 99
http://localhost:3000/blog/abc => This is Blog abc




