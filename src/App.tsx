import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import SearchMeal from './routes/SearchMeal'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-meals' element={<SearchMeal />} />
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default App