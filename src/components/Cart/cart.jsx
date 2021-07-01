import React, { Component } from 'react'
import "./cart.css"

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="total-item">Total Item  :  2</div>
        <div className="continer">
          <div className="row">
            <div className="col-md-4 cart-card">
              Shoes
            </div>
            <div className="col-md-4 cart-card">
              details
            </div>
            <div className="col-md-4 cart-card">
              3
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Cart;


