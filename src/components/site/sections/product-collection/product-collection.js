'use client';
import ProductCard from '../../snippets/product-card/product-card';
import styles from './product-collection.module.css';
import { useEffect, useState } from 'react';

const ProductCollection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <section id="udvalgtSloenhed" className={styles.container}>
      <h2 className={styles.title}>
        Udvalgt <span>skønhed</span>
      </h2>
      <div className={styles.grid}>
        {products.map((Product) => {
          return <ProductCard key={Product._id} product={Product} />;
        })}
      </div>
    </section>
  );
};

export default ProductCollection;
