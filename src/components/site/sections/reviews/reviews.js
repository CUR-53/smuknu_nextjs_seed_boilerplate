'use client';
import ReviewCard from '../../snippets/review-card/review-card';
import styles from './reviews.module.css';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data);
    };

    getReviews();
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span>Skønheder</span> Udtaler
      </h2>
      {reviews.map((Review) => {
        return <ReviewCard key={Review._id} review={Review} />;
      })}
    </section>
  );
};

export default Reviews;
