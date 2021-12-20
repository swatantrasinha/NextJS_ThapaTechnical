import NavBar from '../../components/NavBar';
import styles from '../../styles/blog/index.module.css';
import Link from 'next/link';

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
    return (
        <>
          <NavBar/>
          {
              // data.map((ele) => {
                data.slice(0,5).map((ele) => {
                  
                return (
                    <Link href={`/blog/${ele.id}`} key={ele.id}> 
                        <div className={styles.blogElement}>               
                            <h3 className={styles.blogElementId}> {ele.id}</h3>
                            <h2 className={styles.blogElementTitle}>{ele.title}</h2>
                        </div>
                    </Link>  
                )
              })
          }
          

        </>
    )
}

export default Blog;

