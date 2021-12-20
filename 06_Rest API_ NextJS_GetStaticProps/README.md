We will try to make changes in blog page to fetch data and display it


# 21 - Rest API - Next JS GetStaticProps() for Data Fetching
=============================================================
Earlier in React we used to do data fetching in componentDidMount or using useEffect hook 
In Next JS, we have function below : (documentation : https://nextjs.org/learn/basics/data-fetching)

1. getStaticProps

2. getStaticPaths

3. getServerSideProps 


In pages => blog => we only have [pageNo].js 
we will add a new file index.js

pages => blog => index.js
---------------------------------------------------------------------------------------------------
index.js
---------
import NavBar from '../../components/NavBar';
import styles from '../../styles/blog/index.module.css';

export const getStaticProps = async () => {
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
};

const Blog = ({data}) =>  {
    console.log('data : ', data);
    return (
        <>
          <NavBar/>
          {
              data.map((ele) => {
                return (
                    <div key={ele.id} className={styles.blogElement}>
                        <h3 className={styles.blogElementId}> {ele.id}</h3>
                        <h2 className={styles.blogElementTitle}>{ele.title}</h2>

                    </div>
                )
              })
          }
          

        </>
    )
}
export default Blog;

------------------------------------------------------------------------------------------------------------
This will display all data from the call 
this is approx 100 data. if we want only first 5 data then we can use slice method in data.map like below :

  // data.map((ele) => {
      data.slice(0,5).map((ele) => {
=============================================================================================================

So, now there are 5 data elements with id and title in localhost:3000/blog
we want on click of any of these element (say id 3)it should display details in localhost:3000/blog/3

#23 NextJS - GetStaticPaths() - for Rest API & Dynamic Route
------------------------------------------------------------

now we will remove all code from pages => blog => [pageNo].js and write freshly 
====================================================================================================================================
[pageNo].js
-----------
import NavBar from '../../components/NavBar';
import styles from '../../styles/blog/[pageNo].module.css';


export const getStaticPaths = async() => {
    console.log('1. => PageNo => getStaticPaths !!!');
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    console.log('getStaticPaths ==>> data : ', data);
    // console.log('getStaticPaths ==> pageNo : ', pageNo);
    const paths = data.map((ele)=> {
        return {
            params: {
                pageNo: ele.id.toString(),    /* here as per video LHS "pageNo" is name of file which is in :  pages => blog => [pageNo].js */  

            },
        }
    });

    console.log('getStaticPaths ==>>> paths : ', paths);

    return {
        paths,
        fallback: false,
    }

};

export const getStaticProps = async(context) => {
    console.log('2 . => PageNo => getStaticProps => context ', context);
    const id= context.params.pageNo;   
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    
    return {
        props: {
            data
        },
    }
}; 

const PageNo = ({data}) => {
    console.log('3. =>> PageNo => data : ', data);
    const {id, title, body}= data;
    return (
        <>
        <NavBar />
        <div className={styles.blogElementDetails}>    
            <h3> {id}</h3>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        </>
    )
}

export default PageNo;

====================================================================================================================================