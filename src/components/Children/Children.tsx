import styles from './Children.module.css'


const Children = ({children}:any) => {
  return (
    <div className={styles.children}>
      <div className={styles.content}>Children Data: {children}</div>
    </div>
  )
}

export default Children
