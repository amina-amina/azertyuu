import React, { Component } from "react";
import Client from "../../theme/client";
import ShoppingCartContext from "../../shared/auth/shoppingCart-context";


export default class ShopePage extends Component {
  render() {
    return (
      <Client>
        <div>Product Details page</div>
        <button className="btn btn-warning" onClick={this.addToCart}>Add To Cart</button>
      </Client>
    );
  }

  addToCart = () =>{
      this.context.addToCart();
  }
}

ShopePage.contextType = ShoppingCartContext;