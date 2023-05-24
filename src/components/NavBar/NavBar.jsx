import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Futbol Factory</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Botines
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item" to={`/categoria/botines-adidas`}>Adidas</NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to={`/categoria/botines-nike`}>Nike</NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to={`/categoria/botines-puma`}>Puma</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Camisetas
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item" to={`/categoria/liga-argentina`}>Liga Argentina</NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to={`/categoria/liga-espanola`}>Liga Española</NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to={`/categoria/liga-inglesa`}>Liga Inglesa</NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to={`/categoria/selecciones`}>Selecciones</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accesorios
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item" to={`/categoria/pelotas`}>Pelotas</NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to={`/categoria/guantes`}>Guantes</NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to={`/categoria/protecciones`}>Protecciones</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar