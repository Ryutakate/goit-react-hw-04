import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <img src={image?.src} alt={image?.alt} className={styles.image} />
        </Modal>
    );
}
