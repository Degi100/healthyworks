import { Link } from "react-router-dom";
import { BsWhatsapp as Phone } from 'react-icons/bs';
import { AiOutlineMail as Email} from 'react-icons/ai';
import { GiHamburgerMenu as Burger } from 'react-icons/Gi';
import logo from '../../assets/logoComplete.png';
import '../../app.scss';

export const RouterNavigationLinks = () => {
    return (
        <>
            <nav>
                <ul className="contacts-icons"> 
                    <li className="logo"> 
                    <Link to='/'> <img src={logo} width={300} alt="Logo" ></img></Link></li>
                    <li> <Link to='/'><Phone /></Link></li>
                    <li> <Link to='/'><Email /></Link></li>
                </ul>

                <ul className="burger-menu-icon">
                    <li> <Link to='/'><Burger /></Link></li>
                <ul className="dropdown-content">
                    <li> <Link to='/unternehmen'>Unternehmen</Link></li>
                    <li> <Link to='/leistungen'>Leistungen</Link></li>
                    <li> <Link to='/impressum'>Impressum</Link></li>
                    <li> <Link to='/kontakt'>Kontakt</Link></li>
                </ul>
                </ul>

            </nav>
        </>
    )
}