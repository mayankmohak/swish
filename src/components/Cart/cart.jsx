import React, { Component } from 'react'
import "./cart.css"
import MyData from "../../mydata"

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
  
  increaseQuantity(idx){
    const elem = document.getElementById("quantity"+idx);
    elem.value = Number(elem.value)<10 ? Number(elem.value)+1 : Number(elem.value);
  }

  decreaseQuantity(idx){
    // console.log(React.useContext(cartItemDetails));
    const elem = document.getElementById("quantity"+idx);
    elem.value = Number(elem.value)>0 ? Number(elem.value)-1 : Number(elem.value);
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
          <div className="cart-card-quantity">
            <button onClick={()=>this.increaseQuantity(item.id)}>+</button>
            <input className="quantityItem" id={"quantity"+item.id} value={item.quantity} disabled />
            <button onClick={()=>this.decreaseQuantity(item.id)}>-</button>
          </div>
        </div>
      ));
      return (
        <React.Fragment>
          {/* <MyData.Consumer>
            {
              (context) => (context.state.cart.map((i)=>(
                i.name
              )))
            }
          </MyData.Consumer> */}
          <div className="total-item">Total Item  :  2</div>
          <div className="container cart-products-cards">
            {/* <div className="row">{cartCard}</div> */}
            <br />
            <div classname="row">
            <MyData.Consumer>
              {
                (context) => (context.state.cart.map((item)=>(
                  <div className="col-md-3 cart-card">
                    <img className="cart-card-img" src={item.path} alt="ProductImage" /><br /><br />
                    <div className="cart-card-name">{item.name}</div>
                    <div className="cart-card-detail">{item.category}</div>
                    <div className="cart-card-price">{item.price}</div>
                    <div className="cart-card-quantity">
                      <button onClick={()=>this.increaseQuantity(item.id)}>+</button>
                      <input className="quantityItem" id={"quantity"+item.id} value={item.quantity?item.quantity:1} disabled />
                      <button onClick={()=>this.decreaseQuantity(item.id)}>-</button>
                    </div>
                  </div>
                )))
              }
            </MyData.Consumer>
            </div>
          </div>
          <div className="price-area">
            <div className="price-sepcifiation">
              <span className="left">Subtotal</span>
              <span className="right">₹102.00</span>
            </div>
            <br />
            <div className="price-sepcifiation">
              <span className="left">Shipping & Handling:</span>
              <span className="right">₹0.00</span>
            </div>
            <br />
            <div className="price-sepcifiation">
              <span className="left">Discount:</span>
              <span className="right">₹0.00</span>
            </div>
            <br />
            <div className="price-sepcifiation">
              <span className="left">Grand total:</span>
              <span className="right">₹102.00</span>
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


