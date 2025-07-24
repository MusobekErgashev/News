import React from 'react'
import Header from './components/header/Header'
import Search from './components/search/Search'
import Footer from './components/footer/Footer'
import Content from './components/content/Content'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Search />
      <Content />
      <Footer />
    </div>
  )
}

export default App