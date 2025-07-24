import React from 'react'
import styles from "./search.module.css"

const Search = () => {
  return (
    <div className={styles.main_search}>
      <form>
        <input type="text" className={styles.search_input} placeholder='Search here...' />  
      </form>      
    </div>
  )
}

export default Search