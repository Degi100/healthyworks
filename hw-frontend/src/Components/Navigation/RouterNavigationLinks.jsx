import { Link } from "react-router-dom";
import { BsWhatsapp as Phone } from "react-icons/bs";
import { AiOutlineMail as Email } from "react-icons/ai";
import { GiHamburgerMenu as Burger } from "react-icons/Gi";
import logo from "../../assets/logoComplete.png";
import "../../app.scss";

export const RouterNavigationLinks = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <li className="logo">
            <Link to="/">
              <img src={logo} width={300} alt="Logo"></img>
            </Link>
          </li>
          <ul className="contact-icons">
            <li>
              <Link to="/">
                <Phone />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Email />
              </Link>
            </li>

            <ul className="burger-menu-icon">
              <li>
                <Link to="/">
                  <Burger />
                </Link>
              </li>
              <ul className="dropdown-content">
                <li>
                  <Link to="/unternehmen">Unternehmen</Link>
                </li>
                <li>
                  <Link to="/leistungen">Leistungen</Link>
                </li>
                <li>
                  <Link to="/impressum">Impressum</Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </ul>
            
          </ul>
          <ul className="nav-content">
              <li>
                <Link to="/unternehmen">Unternehmen</Link>
              </li>
              <li>
                <Link to="/leistungen">Leistungen</Link>
              </li>
              <li>
                <Link to="/impressum">Impressum</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
};
