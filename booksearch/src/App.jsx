import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import BookCard from './components/BookCards'

function App() {

  const [content, setContent] = useState([])
  const [bookid, setBookId] = useState("")

/*
  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=james-bond`)
      const data = await response.json()
      setContent(data.results)
      console.log(content)
    }
    catch{
      console.error("Unable to load API data")
    }
  }

  useEffect(()=> {
    getData()
  })
*/

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BookCard/>}/>
      </Routes>
    </Layout>
  )
}

export default App
