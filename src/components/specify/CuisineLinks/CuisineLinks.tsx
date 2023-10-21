import { NavLink, Outlet } from "react-router-dom"
import './CuisineLinks.scss'
const CuisineLinks = () => {

    return (
        <div className="container  cuisine__page">
            <div className="cuisine__links">
                <NavLink to='/search-recipes-by/categories' className={({ isActive }) => isActive ? 'active' : 'inactive'}>Categories</NavLink>
                <br />
                <NavLink to='/search-recipes-by/area' className={({ isActive }) => isActive ? 'active' : 'inactive'}>Area</NavLink>
                <br />
                <NavLink to='/search-recipes-by/ingredient' className={({ isActive }) => isActive ? 'active' : 'inactive'}>Ingredient</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default CuisineLinks