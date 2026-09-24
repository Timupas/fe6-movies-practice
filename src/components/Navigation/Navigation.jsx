import { NavLink } from "react-router-dom"
import { Nav, StyledLink } from "./Navigation.styled.js"

function Navigation() {
    return (
        <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
    )
}

export default Navigation