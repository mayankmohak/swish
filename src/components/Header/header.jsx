import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "./header.css"

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul className="nav-link">
            <Link to="/">
              <li><i class="fa fa-home"></i></li>
            </Link>
            <Link to="/cart">
              <li><i class="fa fa-shopping-cart"></i></li>
            </Link> 
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;


