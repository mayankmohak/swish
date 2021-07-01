import React, { Component } from 'react'
import "./bestCard.css"

class bestCard extends Component {
  render() {
    {/* this.props.id +" | "+ this.props.name +" | "+ this.props.path */}
    const img = this.props.path;
    // console.log(img);
    return (
      <React.Fragment>
        <div id={this.props.id} className="white-card">
          <div className="product-name">
            { this.props.name }
            <span className="shop-now yellow"><br />Shop Now </span>
          </div>
          <div className="product-image"><img className="p-image" src={ img }  alt="product image" /></div>
        </div>
      </React.Fragment>
    );
  }
}

export default bestCard;


