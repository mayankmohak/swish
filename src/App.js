import StoreFlex from "./components/storeFlex/storeFlex.jsx"
import Products from "./components/Products/Products.jsx"
import Search from "./components/Search/Search.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <StoreFlex />
      <Search />
      <Products />
    </div>
  );
}

export default App;
