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
                    <li className="logo"> <Link to='/'><img src={logo} alt="Logo" width={25}></img>Healthy Works</Link></li>
                    <li> <Link to='/'><Phone /></Link></li>
                    <li> <Link to='/'><Email /></Link></li>
                    <li> <Link to='/unternehmen'>Unternehmen</Link></li>
                    <li> <Link to='/leistungen'>Leistungen</Link></li>
                    <li> <Link to='/impressum'>Impressum</Link></li>
                    <li> <Link to='/kontakt'>Kontakt</Link></li>
                </ul>
            </nav>
        </>
    )
}