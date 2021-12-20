
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
