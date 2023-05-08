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
      route: '/competence',
      label: 'Compétence',
    },
    {
      route: '/projet',
      label: 'Projet',
    },
    {
      route: '/Parcours',
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
        <div >
          <Link to="/">
            <h1 className="headerTitle">{TEXT_HEADER_TITLE}</h1>
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
