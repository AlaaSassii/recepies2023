import { NavLink } from 'react-router-dom';
import { MdFastfood } from 'react-icons/md';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import './Navbar.scss'
import useTheme from '../../../hooks/useTheme';
const Navbar = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <nav>
            <div className="container">
                <div className="nav__left">
                    <MdFastfood />
                    Recepies
                </div>
                <div className="nav__right">
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/search-recepies'  >Recipes Search</NavLink></li>
                        <li><NavLink to='/random-recepie'  >Random Recipe</NavLink></li>
                        <li><NavLink to='/search-recepies-by'>Cuisine Recepie</NavLink></li>
                        <li><NavLink to='/contact-us'  >Contact Us</NavLink></li>

                    </ul>
                    <button onClick={toggleTheme}>{theme === 'theme-light' ? <BsSunFill /> : <BsFillMoonStarsFill />}</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar