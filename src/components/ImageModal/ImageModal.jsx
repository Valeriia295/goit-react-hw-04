import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
};

export default function ImageModal({ modalIsOpen, closeModal, item }) {
  return (
    <Modal
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      {item && (
        <img
          className={css.image}
          src={item.urls.regular}
          alt={item.description}
          onClick={closeModal}
        />
      )}
      <div className={css.info}>
        <p>
          <span>Description:</span> {item.description}
        </p>
        <p>
          <span>By:</span> {item.user.name}
        </p>
        <p>
          <span>Likes:</span> {item.likes}
        </p>
      </div>
      <button className={css.button} onClick={closeModal}>
        <span className={css.close}>Close</span>
      </button>
    </Modal>
  );
}
