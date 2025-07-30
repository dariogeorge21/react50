import styles from './Greet.module.css'

const Greet = ({timeOfDay}:{timeOfDay:string}) => {
    const Morning:string = "Good Morning"
    const Afternoon:string = "Good Afternoon"
    const Evening:string = "Good Evening"
  return (
    <div className={styles.greet}>
      {timeOfDay === 'morning' && <h1>{Morning}</h1>}
      {timeOfDay === 'afternoon' && <h1>{Afternoon}</h1>}
      {timeOfDay === 'evening' && <h1>{Evening}</h1>}
    </div>
  )
}

export default Greet;
