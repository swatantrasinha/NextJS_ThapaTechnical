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
