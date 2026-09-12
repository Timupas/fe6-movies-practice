import { NavLink } from './Navigation.module.css'

function Navigation() {
    return (
        <>
        <nav>
            <NavLink to="/">Home</NavLink>{ " | " }
            <NavLink to="/movies">Movies</NavLink>
        </nav>
        
        </>
    )
}

export default Navigation