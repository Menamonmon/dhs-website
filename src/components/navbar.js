import React from 'react';
import './navbar.css';

export function Navbar(props) {
  return (
    <nav className="navbar">
      {props.navLogo}
      <ul className="nav-ul">{props.children}</ul>
    </nav>
  );
}

export function NavIcon(props) {
  return (
    <img src={props.src} alt="logo" className="nav-icon"/>
  );
}

export function NavItem(props) {
  return (
    <li name="nav-item" title={props.title} className="nav-item" key={Math.random().toString()}>
      <a title={props.title} href={props.link} className="icon-btn">
        {props.icon}
      </a>
    </li>
  )
} 