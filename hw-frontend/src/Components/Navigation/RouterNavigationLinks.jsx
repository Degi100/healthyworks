import { Link } from "react-router-dom";
import "../Navigation/routerNavigationLinks.scss"

export const RouterNavigationLinks = () => {
    return (
        <>
            <nav>
                <ul>
                    <li> <Link to='/'>StartPage</Link></li>
                    <li> <Link to='/impressum'>Impressum</Link></li>
                    <li> <Link to='/kontakt'>Kontakt</Link></li>
                    <li> <Link to='/healthymanagement'>Healthy Management</Link></li>
                    <li> <Link to='/nonsmoke'>Rauchfrei</Link></li>
                    <li> <Link to='/relextraine'>Entspannungstraining</Link></li>
                    <li> <Link to='/stresstraine'>Stressprogramm</Link></li>
                    <li> <Link to='/unternehmen'>Unternehmen</Link></li>
                </ul>
            </nav>
        </>
    )
}