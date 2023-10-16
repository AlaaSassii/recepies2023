import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import InputSearch from './components/common/InputSearch'
import MealCard from './components/specify/MealCard'
const App = () => {
  return (
    <>
      {/* <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer /> */}
      {/* <InputSearch /> */}
      <MealCard />
    </>
  )
}

export default App