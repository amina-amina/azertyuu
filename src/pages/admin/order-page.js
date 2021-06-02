import React, { Component } from 'react'
import AdminTheme from '../../theme/admin'
import Orders from '../../components/orders'
import axios from '../../utils/axios';
import OrdersModel from '../../models/orders-models';

export default class OrderPage extends Component {
    constructor(){
        super();
        this.state={
            list_orders:[],
            status:"en attente"

        }
    }
    render() {
        return (
            <div>
               <AdminTheme>
                   <Orders
                    list_orders={this.state. list_orders}
                    change={this.change}
                    status={this.state.status}
                   
                  
                   ></Orders>
               </AdminTheme>
            </div>
        )
    }
    change=(event)=>{
        let value=event.target.value;
        let name=event.target.name;
        console.log(value)
        this.setState({[name]:value})

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
                response.data[k].status,
               

    
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
