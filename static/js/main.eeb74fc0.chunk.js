(this.webpackJsonpswish=this.webpackJsonpswish||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(19),n=c.n(r),i=(c(25),c(4)),o=c(5),j=c(7),d=c(6),l=(c(26),c.p+"static/media/bgbanner.76c9d586.png"),b=c.p+"static/media/girl.e13bb32e.svg",u=c(0),h=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(i.a)(this,c),(e=t.call(this)).storeDetils={id:"",name:"",type:"",details:"",AvtarLocation:""},e.state={isLoaded:!1,storeName:[]},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://60dc0552c2b6280017feb60a.mockapi.io/StoreName").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,storeName:t})}))}},{key:"render",value:function(){var e=this,t=this.state,c=t.isLoaded,s=t.storeName;return c?(s.map((function(t){"1"===t.sid&&(e.storeDetils.id=t.sid,e.storeDetils.name=t.StoreName,e.storeDetils.type=t.StoreType,e.storeDetils.details=t.StoreDetails,e.storeDetils.AvtarLocation=t.AvtarLocation)})),Object(u.jsx)(a.a.Fragment,{children:Object(u.jsxs)("div",{className:"banner",children:[Object(u.jsx)("img",{className:"group1",src:l,alt:"flex background"}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row store-name",children:[this.storeDetils.name,"'s Fashion Store"]}),Object(u.jsx)("div",{className:"row store-details",children:this.storeDetils.details})]}),Object(u.jsx)("img",{className:"girl",src:b,alt:"girl"})]})})):Object(u.jsx)("h1",{children:"Loading..."})}}]),c}(s.Component),O=c.p+"static/media/arrow.b7486acc.svg",m=(c(28),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.path;return Object(u.jsx)(a.a.Fragment,{children:Object(u.jsxs)("div",{id:this.props.id,className:"white-card",children:[Object(u.jsxs)("div",{className:"product-name",children:[this.props.name,Object(u.jsxs)("span",{className:"shop-now yellow",children:[Object(u.jsx)("br",{}),"Shop Now ",Object(u.jsx)("img",{className:"arrow",src:O,alt:"arrow"})," "]})]}),Object(u.jsx)("div",{className:"product-image",children:Object(u.jsx)("img",{className:"p-image",src:e,alt:"productImage"})})]})})}}]),c}(s.Component)),p=(c(29),c.p+"static/media/plus.3c047577.svg"),x=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"featured-card",children:Object(u.jsxs)("div",{className:"product-detail",children:[Object(u.jsx)("img",{className:"featured-image",src:this.props.path,alt:"FPImage"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"p-title",children:this.props.name}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"category",children:this.props.category}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{className:"price",children:[this.props.price," ",Object(u.jsx)("img",{className:"plus-button",align:"right",src:p,alt:"plus"})]})]})})}}]),c}(s.Component),f=(c(30),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).state={isLoaded:!1,bestProduct:[],featuredProduct:[]},s}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://60dc0552c2b6280017feb60a.mockapi.io/BestProduct").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,bestProduct:t})})),fetch("https://60dc0552c2b6280017feb60a.mockapi.io/FeaturedProducts").then((function(e){return e.json()})).then((function(t){e.setState({featuredProduct:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,c=e.bestProduct,s=e.featuredProduct;if(t){var a=c.map((function(e){return Object(u.jsx)(m,{id:e.pid,name:e.ProductName,path:e.AvtarLocation})})),r=s.map((function(e){return Object(u.jsx)(x,{id:e.id,name:e.ProductName,category:e.ProductCategory,price:e.ProductPrice,path:e.AvtarLocation})}));return Object(u.jsxs)("div",{className:"products",children:[Object(u.jsxs)("div",{className:"inline",children:[" ",a," "]}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{class:"title",children:"Featured Products"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"inline",children:[" ",r," "]})]})}return Object(u.jsx)("h1",{children:"Loading..."})}}]),c}(s.Component)),v=(c(31),c.p+"static/media/search.eeaf6b00.svg"),N=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container input-area",children:Object(u.jsxs)("div",{className:"row search-row",children:[Object(u.jsx)("div",{className:"search-icon",children:Object(u.jsx)("img",{src:v,alt:"search"})}),Object(u.jsx)("input",{className:"input",type:"search",placeholder:"Search product"})]})})}}]),c}(s.Component),g=c(13),y=(c(32),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)(a.a.Fragment,{children:Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{className:"nav-link",children:[Object(u.jsx)(g.b,{to:"/",children:Object(u.jsx)("li",{children:Object(u.jsx)("i",{class:"fa fa-home"})})}),Object(u.jsx)(g.b,{to:"/cart",children:Object(u.jsx)("li",{children:Object(u.jsx)("i",{class:"fa fa-shopping-cart"})})})]})})})}}]),c}(s.Component)),k=(c(38),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)("div",{className:"total-item",children:"Total Item  :  2"}),Object(u.jsx)("div",{className:"continer",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4 cart-card",children:"Shoes"}),Object(u.jsx)("div",{className:"col-md-4 cart-card",children:"details"}),Object(u.jsx)("div",{className:"col-md-4 cart-card",children:"3"})]})})]})}}]),c}(s.Component)),w=c(2);c(39);var P=function(){return Object(u.jsx)(g.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(y,{}),Object(u.jsxs)(w.c,{children:[Object(u.jsxs)(w.a,{exact:!0,path:"/",children:[Object(u.jsx)(h,{}),Object(u.jsx)(N,{}),Object(u.jsx)(f,{})]}),Object(u.jsx)(w.a,{path:"/cart",children:Object(u.jsx)(k,{})})]})]})})};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.eeb74fc0.chunk.js.map