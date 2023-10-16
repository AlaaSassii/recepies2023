import { NavLink } from 'react-router-dom';
import { MdFastfood } from 'react-icons/md';
import './Navbar.scss'
const Navbar = () => {
    return (
        <nav className='container'>
            <div className="nav__left">
                <MdFastfood />
                Recepies
            </div>
            <div className="nav__right">
                <ul>
                    <li><NavLink to='/'  >Recipes Search</NavLink></li>
                    <li><NavLink to='/'  >Random Recipe</NavLink></li>
                    <li><NavLink to='/'  >Category-based Recipe</NavLink></li>
                    <li><NavLink to='/'  >Advanced Recipe Search</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar