import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images = [], onImageClick }) {
    if (images.length === 0) return null;
    
    return (
        <ul className={styles.gallery}>
            {images.map(({ id, urls, alt_description }) => (
                <li key={id} className={styles.item}>
                    <ImageCard
                        url={urls.small}
                        alt={alt_description}
                        onClick={() =>
                            onImageClick({ src: urls.regular, alt: alt_description })
                        }
                    />
                </li>
            ))}
        </ul>
    );
}
