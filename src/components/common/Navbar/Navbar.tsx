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
                        <li><NavLink to='/search-meal'  >Recipes Search</NavLink></li>
                        <li><NavLink to='/'  >Random Recipe</NavLink></li>
                        <li><NavLink to='/'  >Category-based Recipe</NavLink></li>
                        <li><NavLink to='/'  >Advanced Recipe Search</NavLink></li>
                    </ul>
                    <button onClick={toggleTheme}>{theme === 'theme-light' ? <BsSunFill /> : <BsFillMoonStarsFill />}</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar