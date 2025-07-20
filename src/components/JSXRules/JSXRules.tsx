import styles from './JSXRules.module.css'

const JSXRules = () => {

    const Rules: string[]=[
        "JSX must return a single parent element!!",
        "JSX elements must be properly closed!!",
        "Attributes of JSX have CamelCasing!!"
    ]
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>JSX Rules</h1>
      <br />
      <ul>
        {Rules.map((item, index) => (
            <li className={styles.li} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default JSXRules
