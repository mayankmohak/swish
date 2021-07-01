import React, { Component } from 'react'
import "./Search.css"
import SearchIcon from "../../assets/icons/search.svg"

class Search extends Component {
  render() {
    return (
      <div className="container input-area">
        <div className="row search-row">
          <div className="search-icon">
            <img src={SearchIcon} alt="search" />
          </div>
          <input className="input" type="search" placeholder="Search product" />
        </div>
      </div>
    );
  }
}

export default Search;


