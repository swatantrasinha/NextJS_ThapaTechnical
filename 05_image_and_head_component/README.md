#19 Next JS Image Component
=============================

Internal Image - we keep in public folder => "table_laptop_juice.jpeg"
External Image -  from link
for internal image => inside public folder - will put an image "table_laptop_juice.jpeg"
for external image => we can use like - "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
for External image - we need to make some changes to add domain of image source in next.config.js file as below


-----------------------------------------
next.config.js
-------------
module.exports = {
  reactStrictMode: true,
// for external image starts
  images: {
    domains: ["images.pexels.com"]
  },
  // for external image ends
}
-----------------------------------------

now in pages => contact => index.js

for internal image :  <Image src="/table_laptop_juice.jpeg" width="300" height="300" alt="laptop-juice-image" />

for external image :  
<Image src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
       width="300" 
       height="300" 
       alt="laptop-coffee-image" />

Now we wil see now to use Head component - to display titile

========================================================================================================================================

#20 NextJS - Head Component & SEO
==================================
Till now we see title of page (browser tab title ) as localhost:3000
to change this we will use Head component

so inside pages folder => index.js
we will import Head component and use it for title 
----------------------------------------------------
index.js
-------
import NavBar from '../components/NavBar';
import Head from 'next/head';


export default function Home() {
  return (
    <>
  <NavBar />
  <Head>
    <title>Home Page</title>
  </Head>
  </>
  )
}
----------------------------------------------------
Note : 
1. Just like title tag we can add <meta> tag also inside Head component if needed
2. In other pages as well like pages => contact => index.js , we can import Head component and then add
<Head>
    <title>Contact Page</title>
  </Head>