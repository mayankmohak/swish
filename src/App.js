import StoreFlex from "./components/storeFlex/storeFlex.jsx"
import Products from "./components/Products/Products.jsx"
import Search from "./components/Search/Search.jsx"
import Header from "./components/Header/header.jsx"
import Cart from "./components/Cart/cart.jsx"
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
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
  );
}

export default App;
