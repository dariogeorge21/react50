import styles from './Product.module.css';



const Product = (props: any) => {
  return (
    <div className={styles.product}>
      <h2 className={styles.name}>Product: {props.name}</h2>
      <p className={styles.price}>Price: {props.price}</p>
    </div>
  )
}

export default Product

