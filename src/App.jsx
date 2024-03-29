import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './api';
import { useEffect, useState } from 'react';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMoreImages, setLoadMoreImages] = useState(true);

  const searchImages = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const perPage = 12;

    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchImages(query.split('/')[1], page, perPage);
        setImages(prevImages => [...prevImages, ...fetchedData.results]);
        setLoadMoreImages(fetchedData.results.length === perPage);

        if (fetchedData.results.length === 0) {
          toast.error('No pictures or photos were found');
          setLoadMoreImages(false);
          return;
        }
      } catch (error) {
        setError(true);
        setLoadMoreImages(false);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchImages} />
      {error && <ErrorMessage onError={setError} />}
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && loadMoreImages && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}

      <Toaster position="top-center" />
    </>
  );
}
