import React from "react"
import StoreFlex from "./components/storeFlex/storeFlex.jsx"
import Products from "./components/Products/Products.jsx"
import Search from "./components/Search/Search.jsx"
import Header from "./components/Header/header.jsx"
import Cart from "./components/Cart/cart.jsx"
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import MyData from "./mydata"
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      cart: 
      [
        {
          "id": "1",
          "name": "Shoes",
          "category": "Red Nike shoes",
          "path": "https://raw.githubusercontent.com/mayankmohak/swish/197ffdd2d82fc717fa820091172e720bde0185e9/src/assets/images/products/shoes.svg",
          "quantity": "1",
          "price": "499.99"
        },
        {
          "id": "2",
          "name": "How to win at life",
          "category": "TheBookStore",
          "path": "https://raw.githubusercontent.com/mayankmohak/swish/197ffdd2d82fc717fa820091172e720bde0185e9/src/assets/images/products/book.svg",
          "quantity": "1",
          "price": "199"
        }
      ]
    }
  }
  render() {
    return (
      <MyData.Provider value={{
        state: this.state,
        addData : (obj) => 
        {
          // console.log(obj);
          // console.log(this.state.cart[0]);
          this.state.cart[this.state.cart.length] = obj;
          this.setState({
            cart : this.state.cart
          })
        }
      }} >
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/swish">
                <StoreFlex />
                <Search />
                <Products />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </Router>
      </MyData.Provider>      
    );
  }
}

export default App;
