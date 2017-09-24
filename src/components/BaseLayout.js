import React, { Component } from 'react';
import '../styles/index.css';

import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div classNameName="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink className="navbar-brand" to="/">Dolly Do-dads</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shirts">Shirts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mugs">Mugs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link disabled" to="/posters">Posters</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
