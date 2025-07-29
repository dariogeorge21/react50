import styles from './Product.module.css';



type ProductProps = {
  name: string;
  price: number;
};

const Product = ({ name, price }: ProductProps) => {
  return (
    <div className={styles.product}>
      <h2 className={styles.name}>Product: {name}</h2>
      <p className={styles.price}>Price: {price}</p>
    </div>
  )
}

export default Product

