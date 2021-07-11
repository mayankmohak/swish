import React, { Component } from 'react'
import ArrowIcon from "../../assets/icons/arrow.svg"

import "./bestCard.css"

class bestCard extends Component {
  render() {
    const img = this.props.path;
    // console.log(img);
    return (
      <React.Fragment>
        <div id={this.props.id} className="white-card">
          <div className="name-shop_now">
            <p className="product-name">
              { this.props.name }
            </p>
            <p className="shop-now">Shop Now <img className="arrow" src={ArrowIcon} alt="arrow" /> </p>
          </div>
          <p className="product-image"><img className="p-image" src={ img }  alt="productImage" /></p>
        </div>
      </React.Fragment>
    );
  }
}

export default bestCard;


