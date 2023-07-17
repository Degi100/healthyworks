import { Link } from "react-router-dom";
import "../Navigation/routerNavigationLinks.scss"
import { BsWhatsapp as Phone } from 'react-icons/bs';
import { AiOutlineMail as Email} from 'react-icons/ai'
import logo from '../../assets/logo.png'

export const RouterNavigationLinks = () => {
    return (
        <>
            <nav>
                <ul> 
                    <li className="logo"> <Link to='/'><img src={logo} alt="Logo" width={25}></img>Healty Works</Link></li>
                    <li> <Link to='/'><Phone /></Link></li>
                    <li> <Link to='/'><Email /></Link></li>
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