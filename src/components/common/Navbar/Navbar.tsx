import { NavLink } from 'react-router-dom';
import { MdFastfood } from 'react-icons/md';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { GiMeal, GiPerspectiveDiceSixFacesRandom, } from 'react-icons/gi'
import './Navbar.scss'
import useTheme from '../../../hooks/useTheme';
import { AiFillHome, AiOutlineMail } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
const Navbar = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <nav>
            <div className="container">
                <div className="nav__left">
                    <MdFastfood />
                    Recipes
                </div>
                <div className="nav__right">
                    <ul>
                        <li><NavLink to='/'><AiFillHome /><div>Home</div></NavLink></li>
                        <li><NavLink to='/search-recipes'  > <BiSearch /><div>Recipes Search</div></NavLink></li>
                        <li><NavLink to='/random-recipe'  ><GiPerspectiveDiceSixFacesRandom /><div>Random Recipe</div></NavLink></li>
                        <li><NavLink to='/search-recipes-by'><GiMeal /><div>Cuisine Recepie</div></NavLink></li>
                        <li><NavLink to='/contact-us'  ><AiOutlineMail /><div>Contact Us</div></NavLink></li>

                    </ul>
                    <button onClick={toggleTheme}>{theme === 'theme-light' ? <BsSunFill /> : <BsFillMoonStarsFill />}</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar