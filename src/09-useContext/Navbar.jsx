
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink
                            to={'/'}
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            home
                        </NavLink>

                        <NavLink
                            to={'/about'}
                            className = {({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            about us
                        </NavLink>ç

                        <NavLink
                            to={'/login'}
                            className = {({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            login
                        </NavLink>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
