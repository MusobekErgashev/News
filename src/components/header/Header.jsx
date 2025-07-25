import styles from "./header.module.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.main_header}>
      <div className={styles.header}>
        <p className={styles.links}>Home</p>
        <p className={styles.links}>Business</p>
        <p className={styles.links}>Entertainment</p>
        <p className={styles.links}>General</p>
        <p className={styles.links}>Health</p>
        <p className={styles.links}>Science</p>
        <p className={styles.links}>Sports</p>
        <p className={styles.links}>Technology</p>
      </div>
    </div>
  )
}

export default Header