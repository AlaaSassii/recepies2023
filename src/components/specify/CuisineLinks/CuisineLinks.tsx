import { NavLink, Outlet } from "react-router-dom"
import './CuisineLinks.scss'
const CuisineLinks = () => {

    return (
        <>
            <NavLink to='/search-recepies-by/categories' className={({ isActive }) => isActive ? 'active' : 'inactive'}>Categories</NavLink>
            <br />
            <NavLink to='/search-recepies-by/area' className={({ isActive }) => isActive ? 'active' : 'inactive'}>Area</NavLink>
            <br />
            <NavLink to='/search-recepies-by/ingredient' className={({ isActive }) => isActive ? 'active' : 'inactive'}>Ingredient</NavLink>
            <Outlet />
        </>
    )
}

export default CuisineLinks