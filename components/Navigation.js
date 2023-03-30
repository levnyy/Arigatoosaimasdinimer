import { useGlobalContext } from '@/store/index.js';
import Header from '../components/Header.js';
import styles from './Navigation.module.css';
import Link from 'next/link.js';
export default function Navigation() {

    const {session, logout} = useGlobalContext();
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><a href="#">Home</a></li>
                <li>
                </li>
                {session && <li><Link href="/">Logout</Link></li>}
                <li>
                    {session ? <Link href="/" onclick={(e) => logout()}>Logout</Link> : <Link href="/login">Login</Link>}
                </li>
            </ul>
        </nav>
    )
}