import styles from './Person.module.css'

function Person(props:any)  {  

  return (
    <div className={styles.person}>
      <h2 className={styles.heading}>Person: {props.name}</h2>
      <p className={styles.age}>Age: {props.age}</p>
    </div>
  )
}

export default Person
