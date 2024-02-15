import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items }) {
  return (
    <div>
      <ul className={css.list}>
        {items.map(item => (
          <li key={item.id} className={css.item}>
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
