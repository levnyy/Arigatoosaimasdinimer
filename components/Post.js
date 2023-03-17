import styles from './Post.module.css';
import Link from 'next/link';
export default function Post(props) {
    return (
        <div className={styles.post}>
            <h3 className={styles.title}>Title</h3>
            <p> Post text lorem ipsum dini saijfoiasfsioaj fpoasif</p>
            <Link className={styles.link} href={`posts/${props.id}`}>More Details</Link>
        </div>
    )
}