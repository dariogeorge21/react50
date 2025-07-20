import styles from './ProductInfo.module.css'

const ProductInfo = () => {

  const product:any = {
    'Name' : 'Dell XPS 13',
    'Price' : 10000,
    'Description' : 'This is a very nice laptop'
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product: {product.Name}</h1>
      <p className={styles.price}>Price : {product.Price}</p>
      <p className={styles.description}>Description: {product.Description}</p>
    </div>
  )
}

export default ProductInfo
