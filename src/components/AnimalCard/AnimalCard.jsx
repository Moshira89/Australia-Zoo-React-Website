import { Link } from 'react-router-dom';
import styles from './animalCard.module.css';
import { getImageUrl } from '../../utils/getImageUrl';

function AnimalCard({ animal }) {
  const shortDescription =
    animal.description.length > 200
      ? animal.description.slice(0, 200) + '...'
      : animal.description;

  const imageSrc = getImageUrl(animal.image);

  return (
    <article className={styles.card}>
      <img
        src={imageSrc}
        alt={animal.name}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.name}>{animal.name}</h2>
        <p className={styles.description}>{shortDescription}</p>
        <p><strong>Diet:</strong> {animal.food}</p>
        <p>
          <strong>Group:</strong>{' '}
          <Link to={`/${animal.group.toLowerCase()}`} className={styles.groupLink}>
            {animal.group}
          </Link>
        </p>
        <Link to={`/animal/${animal.id}`} className={styles.readMoreButton}>
          Read More
        </Link>
      </div>
    </article>
  );
}

export default AnimalCard;
