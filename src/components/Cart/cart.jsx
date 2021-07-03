import React, { Component } from 'react'
import "./cart.css"
import MyData from "../../mydata"

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 2,
      price: 688.99,
      discount: 1.05,
      shipping: 5.05,
      cart: []
    }
  }
  
  increaseQuantity(idx){
    const elem = document.getElementById("quantity"+idx);
    elem.value = Number(elem.value)<10 ? Number(elem.value)+1 : Number(elem.value);
  }

  decreaseQuantity(idx){
    const elem = document.getElementById("quantity"+idx);
    elem.value = Number(elem.value)>0 ? Number(elem.value)-1 : Number(elem.value);
  }

  render() {
    return (
      <React.Fragment>
        <div className="total-item">Total Item  :  {this.state.quantity}</div>
        <div className="container cart-products-cards">
          <br />
          <div classname="row">
          <MyData.Consumer>
            {
              (context) => (context.state.cart.map((item)=>(
                <div className="col-md-3 cart-card">
                  <img className="cart-card-img" src={item.path} alt="ProductImage" /><br /><br />
                  <div className="cart-card-name">{item.name}</div>
                  <div className="cart-card-detail">{item.category}</div>
                  <div className="cart-card-price">₹ {item.price}</div>
                  <div className="cart-card-quantity">
                    <button onClick={()=>this.increaseQuantity(item.id)}>+</button>
                    <input className="quantityItem" id={"quantity"+item.id} value={item.quantity?item.quantity:1} disabled />
                    <button onClick={()=>this.decreaseQuantity(item.id)}>-</button>
                  </div>
                </div>
                            )                     )        )
            }
          </MyData.Consumer>
          </div>
        </div>
        <div className="price-area">
          <div className="price-sepcifiation">
            <span className="left">Subtotal</span>
            <span className="right">₹ {this.state.price.toFixed(2)}</span>
          </div>
          <br />
          <div className="price-sepcifiation">
            <span className="left">Shipping & Handling:</span>
            <span className="right">₹ {this.state.shipping.toFixed(2)}</span>
          </div>
          <br />
          <div className="price-sepcifiation">
            <span className="left">Discount:</span>
            <span className="right">₹ {this.state.discount.toFixed(2)}</span>
          </div>
          <br />
          <div className="price-sepcifiation">
            <span className="left">Grand total:</span>
            <span className="right">₹ {(this.state.price+this.state.shipping+this.state.discount).toFixed(2)}</span>
          </div>
          <br />
          <button className="button">GO TO CHECKOUT</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;


