import React, { Component } from 'react'
import Home from '../../components/website/home'
import ProductModel from '../../models/product-model'
import Client from '../../theme/client'
import axios from '../../utils/axios'
import ShoppingCartContext from "../../shared/auth/shoppingCart-context"

export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            list_product:[]
        }

    }

    componentDidMount() {
        axios.get("products.json").then((response) => {
          if (response.data != null) {
            //extraire toutes les clé de l'objet data
            let keys = Object.keys(response.data);
    
            //parcourir les keys
            let listproductnew = keys.map((k) => {
              let np = new ProductModel(
                k,
                response.data[k].avatar,
                response.data[k].title,
                response.data[k].quantity,
                response.data[k].price,
                response.data[k].categorie,
                response.data[k].description,

    
              );
    
              return np;
            });
    
            //ajouter la liste
            this.setState({ list_product: listproductnew});
            
    
            //ajouter un backup
    
          }
        });
      }

    render() {
        return (
            <div>
                <Client>
                    <Home list_product={this.state.list_product}
                    addToCart={this.addToCart}
                    >
                    </Home>
                </Client>
            </div>
        )
    }
    addToCart = (seletedProduct) => {
      this.context.addToCart(seletedProduct);
    };
}

HomePage.contextType = ShoppingCartContext;