import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import SearchMeal from './routes/SearchMeal'
import MealInfo from './routes/MealInfo'
import CuisineLinks from './components/specify/CuisineLinks/CuisineLinks'
import Categories from './routes/Categories'
import Area from './routes/Area'
import Ingredient from './routes/Ingredient';
import Contact from './routes/Contact';
import RandomRecepie from './routes/RandomRecepie'
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-recipes' element={<SearchMeal />} />
        <Route path='/recipe-info/:id' element={<MealInfo />} />
        <Route path='/random-recipe' element={<RandomRecepie />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="search-recipes-by" element={<CuisineLinks />}>
          <Route path='categories' element={<Categories />} />
          <Route path='area' element={<Area />} />
          <Route path='ingredient' element={<Ingredient />} />
        </Route>

      </Routes>
      <Footer />
    </>
  )
}

export default App