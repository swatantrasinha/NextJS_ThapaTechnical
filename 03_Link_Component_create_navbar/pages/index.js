import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/Link';


export default function Home() {
  return (
    <div className={styles.container}>
     <div className="nav-container">
        <nav>
          <ul className="menu-bar">
            <li className="menu-item">
              <a href="/home">Home</a>
            </li>
            <li className="menu-item">
              <a href="/blog/123">Blog</a>
            </li>
            <li className="menu-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        </div>
{/* Using Link Component See Nav Below */}
<div className="nav-container">
      <nav>
          <ul className="menu-bar">
            <li className="menu-item">
              <Link href="/home">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/blog/123">
                Blog
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        </div>

    </div>
  )
}
