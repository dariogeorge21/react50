import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p className={styles.footerContainer}>
            <p>© 2025 My Website. All rights reserved.</p>
        </p>
      </footer>
    </div>
  )
}

export default Footer
