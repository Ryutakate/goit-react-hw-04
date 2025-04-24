import { useState, useEffect } from 'react';
import { searchImages } from './api/unsplash';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    async function fetchImages() {
      setIsLoading(true);
      try {
        const data = await searchImages(query, page);
        setImages(prev => page === 1 ? data.results : [...prev, ...data.results]);
        setError('');
      } catch (err) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const handleSearch = input => {
    if (!input.trim()) {
      toast.error('Please enter a search term!');
      return;
    }
    setQuery(input);
    setPage(1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setModalImage} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && (
        <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />
      )}
      {modalImage && (<ImageModal isOpen={!!modalImage} onClose={() => setModalImage(null)} image={modalImage}/>)}
      <Toaster position="top-right" />
    </>
  );
}

export default App;
