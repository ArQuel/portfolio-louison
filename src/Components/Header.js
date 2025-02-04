import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var description = this.props.data.description;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className} />
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Accueil
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                A propos
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Curriculum
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Travaux
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Témoignages
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
