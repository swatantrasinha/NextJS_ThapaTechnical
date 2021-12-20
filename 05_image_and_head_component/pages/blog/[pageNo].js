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
