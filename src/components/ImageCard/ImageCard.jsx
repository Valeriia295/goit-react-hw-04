import ImageModal from '../ImageModal/ImageModal';
import { useState } from 'react';
import css from './ImageCard.module.css';

export default function ImageCard({ item }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <ImageModal item={item} modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <img className={css.image} src={item.urls.small} alt={item.description} onClick={openModal} />
    </div>
  );
}
