import Image from 'next/image';
import styles from './product-card.module.css';
import Link from 'next/link';

const PercentBox = ({ percent }) => {
  return percent ? (
    <div className={styles.discount}>
      <div className={styles.discountText}>SPAR</div>
      <div className={styles.discountPercent}>{percent}%</div>
    </div>
  ) : (
    ''
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <PercentBox percent={product.discountInPercent ? product.discountInPercent : 0} />
        <Image src={product.image} alt={product.title} width={200} height={200} />
      </div>

      <div className={styles.content}>
        <div>
          <div className={styles.title}>
            <Link href={`/products/${product._id}`}>{product.title}</Link>
          </div>
        </div>

        <div className={styles.footer}>
          <div>
            <div className={styles.price}>{product.price},00 kr.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
