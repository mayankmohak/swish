import React, { Component } from 'react'
import BestCard from "../bestcards/bestCard"
import FeaturedCard from "../featuredcards/featuredCard"
import "./Products.css"

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      bestProduct: [],
      featuredProduct: []
    }
  }

  componentDidMount() {
    fetch('https://60dc0552c2b6280017feb60a.mockapi.io/BestProduct')
      .then(res => res.json())
      .then((bpdata) => {
        this.setState({
          isLoaded: true,
          bestProduct: bpdata
        });
      });
    fetch('https://60dc0552c2b6280017feb60a.mockapi.io/FeaturedProducts')
      .then(res => res.json())
      .then((fpdata) => {
        this.setState({
          featuredProduct: fpdata
        });
      });
  }

  render() {
    const { isLoaded, bestProduct, featuredProduct } = this.state;
    if (!isLoaded) {
      return <h1>Loading...</h1>
    }
    else {
      const bestProductCard = bestProduct.map(j =>
        <BestCard
          id={j.pid}
          name={j.ProductName}
          path={j.AvtarLocation}
        />
      );
      const featuredProductCard = featuredProduct.map(k =>
        <FeaturedCard
          id={k.id}
          name={k.ProductName}
          category={k.ProductCategory}
          price={k.ProductPrice}
          path={k.AvtarLocation }
        />
      );
      return (
        <div className="products">
          <div className="inline1"> { bestProductCard } </div>
          <br />
          <label class="title">Featured Products</label>
          <br />
          <br />
          <br />
          <div className="inline2"> { featuredProductCard } </div>
        </div>
      );
    }
  }
}

export default Products;





// https://60dc0552c2b6280017feb60a.mockapi.io/FeaturedProducts
// https://60dc0552c2b6280017feb60a.mockapi.io/BestProduct
// https://60dc0552c2b6280017feb60a.mockapi.io/StoreName