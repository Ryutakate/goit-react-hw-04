import styles from './ImageCard.module.css';

export default function ImageCard({ url, alt, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={url} alt={alt} className={styles.image} />
        </div>
    );
}
