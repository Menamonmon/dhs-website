import React from 'react';
import './navbar.css';

export default class NavBar extends React.Component {

  render() {
    let navLinks = this.props.navLinks;
    navLinks = navLinks.map(l => <li><a href={l.link}>{l.pageName}</a></li>);
    console.log(navLinks.length);

    return (
      <header className="nav-header">
        <img src={"./images/img/dhs-logo.png"} className="logo"/>
        <nav className="navbar">
          <ul className="nav-ul">
            {navLinks}
          </ul>
        </nav>
      </header>
    );
  }
}