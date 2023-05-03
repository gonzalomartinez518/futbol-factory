import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Futbol Factory</a>
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
                                <li className="dropdown-item">Adidas</li>
                                <li className="dropdown-item">Nike</li>
                                <li className="dropdown-item">Puma</li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Camisetas
                            </div>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">Liga Argentina</li>
                                <li className="dropdown-item">Liga Española</li>
                                <li className="dropdown-item">Liga Inglesa</li>
                                <li className="dropdown-item">Selecciones</li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accesorios
                            </div>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">Pelotas</li>
                                <li className="dropdown-item">Guantes</li>
                                <li className="dropdown-item">Protecciones</li>
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