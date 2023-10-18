import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import SearchMeal from './routes/SearchMeal'
import MealInfo from './routes/MealInfo'
import useSearchRecepieByName from './hooks/useSearchRecepieByName'
import CuisineLinks from './components/specify/CuisineLinks/CuisineLinks'
import Categories from './routes/Categories'
import Area from './routes/Area'
import Ingredient from './routes/Ingredient'
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
        <Route path='/search-recepies' element={<SearchMeal />} />
        <Route path='/recepie-info/:id' element={<MealInfo />} />
        <Route path='/random-recepie' element={<MealInfo />} />

        <Route path="search-recepies-by" element={<CuisineLinks />}>
          <Route path='categories' element={<Categories />} />
          <Route path='area' element={<Area />} />
          <Route path='ingredient' element={<Ingredient />} />
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