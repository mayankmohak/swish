import React, { Component } from 'react'
import "./cart.css"

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      cart: []
    }
  }
  componentDidMount() {
    fetch('https://60dc0552c2b6280017feb60a.mockapi.io/cart')
      .then(res => res.json())
      .then((cdata) => {
        this.setState({
          isLoaded: true,
          cart: cdata
        });
      });
  }
  render() {
    if(!this.state.isLoaded)
      return <h1>Loading...</h1>
    else {
      const cartCard = this.state.cart.map( (item) => (
        <div className="col-md-3 cart-card">
          <img className="cart-card-img" src={item.avtarLocation} alt="ProductImage" /><br /><br />
          <div className="cart-card-name">{item.name}</div>
          <div className="cart-card-detail">{item.detail}</div>
          <div className="cart-card-price">{item.price}</div>
          <div className="cart-card-quantity"><button>+</button> {item.quantity} <button>-</button></div>
        </div>
      ));
      return (
        <React.Fragment>
          <div className="total-item">Total Item  :  2</div>
          <div className="container cart-products-cards">
            <div className="row">{cartCard}</div>
          </div>
          <div className="price-area">
            <div className="price-sepcifiation">
              <span className="left">Subtotal</span>
              <span className="right">$102.00</span>
            </div>
            <br />
            <div className="price-sepcifiation">
              <span className="left">Shipping & Handling:</span>
              <span className="right">$0.00</span>
            </div>
            <br />
            <div className="price-sepcifiation">
              <span className="left">Discount:</span>
              <span className="right">$0.00</span>
            </div>
            <br />
            <div className="price-sepcifiation">
              <span className="left">Grand total:</span>
              <span className="right">$102.00</span>
            </div>
            <br />
            <button className="button">GO TO CHECKOUT</button>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Cart;


