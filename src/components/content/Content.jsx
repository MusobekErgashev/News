import React from 'react'
import styles from "./content.module.css"
import { useEffect, useState } from 'react'

const Content = () => {
  const [articles, setArticles] = useState([]);

  const api_key = "0230ead84b784dcbb38e18eddf268358"
  const query = "tesla"
  const url = `https://newsapi.org/v2/everything?q=${query}&from=2025-07-23&to=2025-07-23&sortBy=popularity&apiKey=${api_key}`

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    }

    fetchData();
  }, [url]);

  return (
    <div className={styles.main_content}>
      <div className={styles.content}>

        {
          articles.map((item, index) => {
            return (
              <div className={styles.items} key={index}>
                <div className={styles.top}>
                  <img src={item.urlToImage} alt="img" className={styles.img} />
                  <span className={styles.category_name}>Science</span>
                </div>

                <div className={styles.title_part}>
                  <h4>{item.title}</h4>

                  <div className={styles.publish}>
                    <p className={styles.published_by}>{item.author}</p>
                    <p className={styles.published_date}>3 days ago</p>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Content