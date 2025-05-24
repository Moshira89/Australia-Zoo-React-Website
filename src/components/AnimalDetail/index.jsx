import { useParams, useNavigate } from "react-router-dom";
import animals from "../../data/animals";
import styles from './animalDetail.module.css'; 

function AnimalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const animal = animals.find(animal => animal.id === parseInt(id));

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <div className={styles.detailOverlay}>
      <div className={styles.detailCard}>
        <img src={animal.image} alt={animal.name} className={styles.image} />
        <h2>{animal.name}</h2>
        <p><strong>Group:</strong> {animal.group}</p>
        <p><strong>Diet:</strong> {animal.diet}</p>
        <p><strong>Description:</strong> {animal.description}</p>
        <button onClick={() => navigate(-1)} className={styles.closeBtn}>Close</button>
      </div>
    </div>
  );
}

export default AnimalDetail;