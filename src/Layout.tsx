import { NavLink, Outlet } from "react-router-dom";

// This layout component uses and Bootstrap class settings to format the navigation
// Links to the pages. The Outlet component renders each component page underneath
// the navigation bar.


export default function Layout () {
    return <><nav className="navbar navbar-light navbar-expand-lg bg-warning">
        <div className="container-fluid">
        <NavLink to="/" className="navbar-brand nav-item nav-link active">Home</NavLink>
        <NavLink to="/Categories" className="nav-item nav-link">Categories</NavLink>
        <NavLink to="/Areas" className="nav-item nav-link">Areas</NavLink>
        </div>
    </nav>
        <Outlet/>
    </>
}