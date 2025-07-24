import React from 'react'
import styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.main_header}>
      <div className={styles.header}>
        <a href="#" className={styles.links}>Home</a>
        <a href="#" className={styles.links}>Business</a>
        <a href="#" className={styles.links}>Entertainment</a>
        <a href="#" className={styles.links}>General</a>
        <a href="#" className={styles.links}>Health</a>
        <a href="#" className={styles.links}>Science</a>
        <a href="#" className={styles.links}>Sports</a>
        <a href="#" className={styles.links}>Technology</a>
      </div>
    </div>
  )
}

export default Header