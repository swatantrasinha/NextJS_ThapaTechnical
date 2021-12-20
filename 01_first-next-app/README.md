LEARN NEXT JS
--------------

Source - youtube
link - https://www.youtube.com/watch?v=2OaAbSgmIWo&list=PLwGdqUZWnOp2rDbpfKAeUi9f8qZMS7_cv&index=1

=========================================================================================================

#1 Introduction to Next JS
==============================================

What is Next.js : It is React framework for production
Next JS is a React framework that enables us to build superfast and extremely user-friendly static websites as well as full fledge production ready
web applications using React.

Automatic Static Optimization allows Next.js to build hybrid applications that contain both server rendered and static-generated pages.

Why Next JS
------------
- SEO efficienct
- It is using Server Side Rendering(SSR) and at the same time it can also be a great Statis Site Generator(SSG).

In short, Next JS websites are superfast, easy to scan and provide a great user experience and that's why Google will favour them above others and rank them higher.

- File Based Routing
- Support for CSS modules( Css for each pages)
- Pre rendering (better SEO)
- Image Optimization ('next/image')
- API Route ('pages/api/user.js')
- Typescript Support, Fast Refresh (fast, live editing experience)
- Development and Production Build System



#2 Install Next.JS & Run Hello World Program
==============================================

npx create-next-app first-next-app
yarn dev

#4 Understanding Next.JS Folder Structure and #5 How Next.JS Code works under the hood
=======================================================================================
Note: /node_modules and /.next/ is there in .gitignore

_app.js => main entry point
In _app.js the below code 
<Component {...pageProps} />
Component is what is export from index.js (which is parallel to _app.js)

So, _app.js and index.js is must

Now see Readme.md file inside folder - "02_folder_structure_and_routing" 



