import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items }) {
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
