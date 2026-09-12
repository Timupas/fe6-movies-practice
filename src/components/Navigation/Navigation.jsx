import { NavLink } from './Navigation.module.css'
import { Nav } from './Navigatioon.styled.js'

function Navigation() {
    return (
        <>
        <Nav>
            <NavLink to="/">Home</NavLink>{ " | " }
            <NavLink to="/movies">Movies</NavLink>
        </Nav>
        
        </>
    )
}

export default Navigation