import Image from 'next/image';
import styles from './review-card.module.css';

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={review.image} alt={review.name} width={200} height={200} />
        <div className={styles.header}>
          <h3>{review.name}</h3>
          <p>{review.byline}</p>
        </div>
      </div>
      <div className={styles.content}>
        <p>{review.description}</p>
      </div>
      <div className={styles.content}></div>
      <div className={styles.footer}>
        <h3>{review.name}</h3>
        <p>{review.byline}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
