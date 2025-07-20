import { useState, useEffect } from 'react'
import styles from './Greeting.module.css'

const Greeting = () => {
    const WelcomeMessage = "Hello 1st hour complete!!"
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString())
      }, 1000)

      return () => clearInterval(timer)
    }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.message}>{WelcomeMessage}</h1>
      <p className={styles.time}>{currentTime}</p>
    </div>
  )
}

export default Greeting
