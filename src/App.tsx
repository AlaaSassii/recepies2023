import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import SearchMeal from './routes/SearchMeal'
import MealInfo from './routes/MealInfo'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-meals' element={<SearchMeal />} />
        <Route path='/meal/:id' element={<MealInfo />} />
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