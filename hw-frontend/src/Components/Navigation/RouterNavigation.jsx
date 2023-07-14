import { Link, Outlet } from "react-router-dom";

export const RouterNavigation = () => {
    return (
        <>
            <Link to="/">
            <h1>Herzlich Willkommen</h1>
            </Link>
            <nav>
                <ul>
                    <li> <Link to='/startpage'>StartPage</Link></li>
                    <li> <Link to='/impressum'>Impressum</Link></li>
                    <li> <Link to='/kontakt'>Kontakt</Link></li>
                    <li> <Link to='/healthymanagement'>Healthy Management</Link></li>
                    <li> <Link to='/nonsmoke'>Rauchfrei</Link></li>
                    <li> <Link to='/relextraine'>Entspannungstraining</Link></li>
                    <li> <Link to='/stresstraine'>Stressprogramm</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}