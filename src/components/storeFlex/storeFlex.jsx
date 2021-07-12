import React, { Component } from 'react'
import "./storeFlex.css"
// import BgPath from "../../assets/images/banner/path-mobile.svg"
// import BgBanner from "../../assets/images/banner/bgbanner.png"
import Girl from "../../assets/images/banner/girl.svg"

class StoreFlex extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      storeName: [],
    }
  }
  storeDetils = {
    id : "",
    name : "",
    type : "",
    details : "",
    AvtarLocation : ""
  }
  componentDidMount() {
    fetch('https://60dc0552c2b6280017feb60a.mockapi.io/StoreName')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        isLoaded: true,
        storeName: data,
      });
    });
  }
  render() {
    const { isLoaded, storeName } = this.state;
    if (!isLoaded) {
      return <h1>Loading...</h1>
    }
    else {
      storeName.map(i => {
        if(i.sid === "1") {
          this.storeDetils.id= i.sid;
          this.storeDetils.name = i.StoreName;
          this.storeDetils.type = i.StoreType;
          this.storeDetils.details = i.StoreDetails;
          this.storeDetils.AvtarLocation = i.AvtarLocation;
        }
      });
      return (
        <React.Fragment>
          <div className="banner">
            {/* <p className="group1" ></p> */}
            {/* <img className="group1 img-fluid img-responsive" src={BgPath} alt="flex background" /> */}
            <div className="container">
              <div className="row store-name">
                {this.storeDetils.name}'s Fashion Store
              </div>
              <div className="row store-details">
                {this.storeDetils.details}
              </div>
            </div>
            
            <img className="girl" src={Girl} alt="girl" />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default StoreFlex;