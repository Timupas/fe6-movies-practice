import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Movies from './pages/Movies/Movies.jsx'
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
