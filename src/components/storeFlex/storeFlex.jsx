import React, { Component } from 'react'
import "./storeFlex.css"
// import BgPath from "../../assets/images/banner/path.svg"
import BgBanner from "../../assets/images/banner/bgbanner.png"
import Girl from "../../assets/images/banner/girl.svg"

class StoreFlex extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <img className="group1" src={BgBanner} alt="flex background" />
          <div className="container">
            <div className="row store-name">
              Ruth’s Fashion Store
            </div>
            <div className="row store-details">
              Get best shirts around you, check out our offers
            </div>
          </div>
          
          <img className="girl" src={Girl} alt="girl" />
        </div>
      </React.Fragment>
    );
  }
}

export default StoreFlex;