import { useState, useEffect, useRef } from 'react'
import contentStyles from "./components/content/content.module.css"
import headerStyles from "./components/header/header.module.css"
import footerStyles from "./components/footer/footer.module.css"
import leftArrow from "./assets/left-arrow.png"
import rightArrow from "./assets/right-arrow.png"
import searchStyles from "./components/search/search.module.css"

const App = () => {
  const [articles, setArticles] = useState([]);
  const [changeQuery, setChangeQuery] = useState("tesla")
  const [page, setPage] = useState(1);
  const searchInpt = useRef()

  let limit = 12;

  const api_key = "0230ead84b784dcbb38e18eddf268358"
  const url = `https://newsapi.org/v2/everything?q=${changeQuery}&from=2025-07-23&to=2025-07-23&sortBy=popularity&pageSize=${limit}&page=${page}&apiKey=${api_key}`

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        setLoader(false)
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    }

    fetchData();

  }, [url]);

  if (loader) {
    return (
      <div className='loader_back'>
        <span class="loader">L &nbsp; ading</span>
      </div>
    )
  }

  const obj = [
    {
      name: "Home",
      id: 1
    },
    {
      name: "Business",
      id: 2
    },
    {
      name: "Entertainment",
      id: 3
    },
    {
      name: "General",
      id: 4
    },
    {
      name: "Health",
      id: 5
    },
    {
      name: "Science",
      id: 6
    },
    {
      name: "Sports",
      id: 7
    },
    {
      name: "Technology",
      id: 8
    },
  ]

  function searchSubmit (e) {
    e.preventDefault()

    setChangeQuery(searchInpt.current.value)
    searchInpt.current.value = ""
  }

  return (
    <div className='container'>
      <div className={headerStyles.main_header}>
        <div className={headerStyles.header}>
          {
            obj.map((item) => {
              return (
                <p key={item.id} onClick={() => { setChangeQuery(item.name) }} className={headerStyles.links}>{item.name}</p>
              )
            })
          }
        </div>
      </div>

      <div className={searchStyles.main_search}>
        <form onSubmit={searchSubmit}>
          <input type="text" className={searchStyles.search_input} ref={searchInpt} placeholder='Search here...' />
        </form>
      </div>

      <div className={contentStyles.main_content}>
        <div className={contentStyles.content}>

          {
            articles.map((item, index) => {
              return (
                <div className={contentStyles.items} key={index}>
                  <div className={contentStyles.top}>
                    <img src={item.urlToImage ? item.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"} alt="img" className={contentStyles.img} />
                    <span className={contentStyles.category_name}>Science</span>
                  </div>

                  <div className={contentStyles.title_part}>
                    <h4>{item.title?.length >= 70 ? item.title.slice(0, 70) + "..." : item.title}</h4>

                    <div className={contentStyles.publish}>
                      <p className={contentStyles.published_by}>{item.author?.length > 15 || !item.author?.length ? "Unknown" : item.author}</p>
                      <p className={contentStyles.published_date}>3 days ago</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

      <div className={footerStyles.footer}>
        <a href="#" className={footerStyles.arrows}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}>
          <img src={leftArrow} alt="" />
        </a>

        <a href="" className={footerStyles.pages} onClick={(e) => { e.preventDefault(); setPage(1); }}>1</a>
        <a href="" className={footerStyles.pages} onClick={(e) => { e.preventDefault(); setPage(2); }}>2</a>
        <a href="" className={footerStyles.pages} onClick={(e) => { e.preventDefault(); setPage(3); }}>3</a>
        <a href="" className={footerStyles.pages} onClick={(e) => { e.preventDefault(); setPage(4); }}>4</a>
        <a href="" className={footerStyles.pages} onClick={(e) => { e.preventDefault(); setPage(5); }}>5</a>

        <a href="#" className={footerStyles.arrows} onClick={() => setPage((prev) => prev + 1)}>
          <img src={rightArrow} alt="" />
        </a>
      </div>
    </div>
  )
}

export default App