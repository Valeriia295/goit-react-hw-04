import toast from 'react-hot-toast';
import { RiSearchEyeLine } from 'react-icons/ri';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const handleSubmit = evt => {
    evt.preventDefault();

    if (evt.target.elements.query.value.trim() === '') {
      toast.error('Enter your query!');
      return;
    }

    onSearch(evt.target.elements.query.value);
    evt.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <RiSearchEyeLine size="17px" className={css.icon} />
        </button>
      </form>
    </header>
  );
}
