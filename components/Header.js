import Navigation from '../components/Navigation';
import styles from './Header.module.css';

const Header = () => (
    <header>
            <div className={styles.home}>
            <img src="logo_campus_news.png" className={styles.image}></img>
            <h1 className='title'>Campus News</h1>
            <Navigation/>
            </div>
    </header>
)
export default Header;