import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import { NavRoute } from "../routes/navRoute";
import {TEXT_HEADER_TITLE} from "../constante/constantes"
const Header = () => {
 
  
  const navItems: NavRoute[] = [
    {
      route: '/',
      label: 'Accueil',
    },
    {
      route: '/createQrcode',
      label: 'Compétence',
    },
    {
      route: '/monCompte',
      label: 'Projet',
    },
    {
      route: '/monCompte',
      label: 'Parcours',
    },
  ]

  const NavList = () => (
    <ul className="list">
      {navItems.map(
        (item) =>
          (
            <li key={item.route}>
              <Link to={item.route} className='Btn'>
                {item.label}
              </Link>
            </li>
          )
      )}

    </ul>
  );
 
  return (
    <header className="appBar">
      <div className="Composant">
        <div className="headerTitle">
          <Link to="/">
            <h1>{TEXT_HEADER_TITLE}</h1>
          </Link>
        </div>
        <nav>
          <NavList />
        </nav>
      </div>
    </header>
  );
};

export default Header;
