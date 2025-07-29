import styles from './Person.module.css'

type PersonProps = {
    name:string,
    age:number
} 


function Person({name, age}: PersonProps)  {  

  return (
    <div className={styles.person}>
      <h2 className={styles.heading}>Person: {name}</h2>
      <p className={styles.age}>Age: {age}</p>
    </div>
  )
}

export default Person
