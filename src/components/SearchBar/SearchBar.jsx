import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');
    
    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (query.trim() === '') {
            toast.error('Please enter a search term!');
            return;
        }
        
        onSubmit(query.trim());
        setQuery('');
    };
    
    return (
        <header className={styles.header}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    autoFocus
                    autoComplete="off"
                    placeholder="Search images and photos"
                    className={styles.input}
                />
                
                <button type="submit" className={styles.button}>
                    Search
                </button>
            </form>
        </header>
    );
}
