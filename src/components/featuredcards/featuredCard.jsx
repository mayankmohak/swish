import React, { Component } from 'react'
import "./featuredCard.css"
import PlusButton from "../../assets/icons/plus.svg"

class featuredCard extends Component {
  render() {
    return (
      <div className="featured-card">
        <div className="product-detail">
          {/* <span className="shop-now yellow"><br />Shop Now <img className="arrow" src={} alt="arrow" /> </span> */}
          <img className="featured-image" src={this.props.path} alt="FPImage" />
          <br />
          <label className="p-title">{ this.props.name }</label><br />
          <span className="category">{ this.props.category }</span><br /><br />
          <span className="price">{ this.props.price } <img  className="plus-button" align="right" src={ PlusButton } alt="plus" /></span>
        </div>
      </div>
    );
  }
}

export default featuredCard;