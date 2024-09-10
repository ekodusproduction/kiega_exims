import Image from 'next/image';
import styles from './Card.module.css';

const Card = ({ imageSrc, title, description, width = '300px', height = '350px' }) => {
  return (
    <div className={styles.card} style={{ width, height }}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
