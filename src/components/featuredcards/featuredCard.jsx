import React, { Component } from 'react'
import "./featuredCard.css"
import PlusButton from "../../assets/icons/plus.svg"
import MyData from "../../mydata"


class featuredCard extends Component {
  render() {
    return (
      <div className="featured-card">
        <div className="product-detail">
          {/* <span className="shop-now yellow"><br />Shop Now <img className="arrow" src={} alt="arrow" /> </span> */}
          <img className="featured-image" src={this.props.path} alt="FPImage" />
          <br />
          <p className="p-title">{ this.props.name }</p>
          <p className="category">{ this.props.category }</p>
          <p className="price">₹ { this.props.price } 
            <MyData.Consumer>
            {
              (context) => (
                <img onClick={()=>context.addData(this.props)} className="plus-button" align="right" src={ PlusButton } alt="plus" />
              )
            }
            </MyData.Consumer>
          </p>
        </div>
      </div>
    );
  }
}

export default featuredCard;