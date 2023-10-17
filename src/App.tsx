import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import SearchMeal from './routes/SearchMeal'
import MealInfo from './routes/MealInfo'
import useSearchRecepieByName from './hooks/useSearchRecepieByName'
import CuisineLinks from './components/specify/CuisineLinks/CuisineLinks'
import Categories from './routes/Categories'
const App = () => {
  const { error, handleChangeMealValue, loading, name, recepies } = useSearchRecepieByName()
  console.log({ error, handleChangeMealValue, loading, name, recepies });

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-meals' element={<SearchMeal />} />
        <Route path='/meal/:id' element={<MealInfo />} />

        <Route path="search-recepies-by" element={<CuisineLinks />}>
          <Route path='categories' element={<Categories />} />
          <Route path='area' element={<h1>area</h1>} />
          <Route path='ingredient' element={<h1>ingredient</h1>} />
        </Route>

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