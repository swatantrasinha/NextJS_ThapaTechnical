import styles from '../styles/Home.module.css';
import Link from 'next/Link';


const NavBar = () => {
    return (
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
    )
}

export default NavBar
