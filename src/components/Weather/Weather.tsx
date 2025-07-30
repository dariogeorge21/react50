import styles from './Weather.module.css'

const Weather = ({temperature}: {temperature: number}) => {

    const cold : string = "Its cold outside!!";
    const hot : string = "Its hot outside!!";
    const nice : string = "Its nice outside!!";

  return (
    <div className={styles.weather}>
        <h1>Weather Conditional Rendering</h1>
      {temperature<15? cold : temperature>=15 && temperature<=25 ? nice: hot}      
    </div>
  )
}

export default Weather
