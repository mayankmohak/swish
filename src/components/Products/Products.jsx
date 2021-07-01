import React, { Component } from 'react'
import BestCard from "../bestcards/bestCard"
import FeaturedCard from "../featuredcards/featuredCard"
import "./Products.css"

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      storeName: [],
      bestProduct: [],
      featuredProduct: []
    }
  }

  componentDidMount( ) {
    fetch('https://60dc0552c2b6280017feb60a.mockapi.io/StoreName')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        isLoaded: true,
        storeName: data,
      });
    });
    fetch('https://60dc0552c2b6280017feb60a.mockapi.io/BestProduct')
    .then(res => res.json())
    .then((bpdata) => {
      this.setState({
        bestProduct: bpdata
      });
    });
    fetch('https://60dc0552c2b6280017feb60a.mockapi.io/FeaturedProducts')
    .then(res => res.json())
    .then((fpdata) => {
      this.setState({
        FeaturedProducts: fpdata
      });
    });
  }

  render() {
    const { isLoaded, storeName , bestProduct, featuredProduct} = this.state;
    if(!isLoaded){
      return <h1>Loading...</h1>
    }
    else {
      const bestCardsCrousel = bestProduct.map(j => 
        <BestCard 
         id={j.pid}
         name={j.ProductName}
         path={j.AvtarLocation}
        />
      );
      return (
        <div className="products">
          <div className="inline">
            {bestCardsCrousel}
          </div>
          <br />
          <label>Featured Products</label>
          <FeaturedCard
            id=""
            name=""
          />

            {storeName.map(i => (
              i.StoreName + " | " 
            ))}
        </div>
      );
    }
  }
}

export default Products;





// https://60dc0552c2b6280017feb60a.mockapi.io/FeaturedProducts
// https://60dc0552c2b6280017feb60a.mockapi.io/BestProduct
// https://60dc0552c2b6280017feb60a.mockapi.io/StoreName