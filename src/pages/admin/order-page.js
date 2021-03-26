import React, { Component } from 'react'
import AdminTheme from '../../theme/admin'
import Orders from '../../components/orders'
import axios from '../../utils/axios';
import OrdersModel from '../../models/orders-models';

export default class OrderPage extends Component {
    constructor(){
        super();
        this.state={
            list_orders:[]
        }
    }
    render() {
        return (
            <div>
               <AdminTheme>
                   <Orders
                    list_orders={this.state. list_orders}
                   ></Orders>
               </AdminTheme>
            </div>
        )
    }

    componentDidMount() {
        axios.get("orders.json").then((response) => {
          if (response.data != null) {
            //extraire toutes les clé de l'objet data
            let keys = Object.keys(response.data);
    
            //parcourir les keys
            let listordersnew = keys.map((k) => {
              let ns = new OrdersModel(
                k,
                response.data[k].avatar,
                response.data[k].categorie,
                response.data[k].description,
                response.data[k].fullname,
                response.data[k].phone,
                response.data[k].price,
                response.data[k].quantity,
                response.data[k].title,
               

    
              );
    
              return ns;
            });
    
            //ajouter la liste
            this.setState({ list_orders: listordersnew });
         
    
            //ajouter un backup
    
          }
        });
      }
    
}
