import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import SearchMeal from './routes/SearchMeal'
import MealInfo from './routes/MealInfo'
import useSearchRecepieByName from './hooks/useSearchRecepieByName'
const App = () => {
  const { error, handleChangeMealValue, loading, name, recepies } = useSearchRecepieByName()
  console.log({ error, handleChangeMealValue, loading, name, recepies });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-meals' element={<SearchMeal />} />
        <Route path='/meal/:id' element={<MealInfo />} />
        {/* <Route path="search-recepies-by">
          <Route index element={<h1>categories</h1>} />
          <Route path='categories' element={<h1>categories</h1>} />
          <Route path='area' element={<h1>area</h1>} />
          <Route path='ingredient' element={<h1>ingredient</h1>} />
        </Route> */}
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