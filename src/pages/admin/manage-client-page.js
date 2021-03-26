import React, { Component } from 'react'
import AdminTheme from '../../theme/admin'
import ModelClient from '../../models/model-client'
import axios from '../../utils/axios'

export default class ManageClientPage extends Component {
    constructor(){
       super()
       this.state={

        list_client:[
            // new ModelClient(0,"youness","agn","0670707070","youness@agn.com"),
            // new ModelClient(1,"youness","agn","0670707070","youness@agn.com"),
            // new ModelClient(2,"youness","agn","0670707070","youness@agn.com"),

        ]
       }

       
   }

   componentDidMount() {
    axios.get("clients.json").then((response) => {
      if (response.data != null) {
        //extraire toutes les clé de l'objet data
        let keys = Object.keys(response.data);

        //parcourir les keys
        let listclientsnew = keys.map((k) => {
          let ns = new ModelClient(
            k,
            response.data[k].FirstName,
            response.data[k].LastName,
            response.data[k].PhoneNumber,
            response.data[k].Email,
          );

          return ns;
        });

        //ajouter la liste
        this.setState({ list_client: listclientsnew });
    }
});
}

    render() {
        return (
            <AdminTheme>
                 <div>
            <div>
             
                
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Customers List</h4>
                                <p className="card-category" />
                            </div>
                            <div className="card-body table-responsive">
                                <table className="table table-hover">
                                    <thead className style={{ color: 'rgb(0, 0, 0)' }}>
                                        <tr>
                                            <th><strong>FirstName</strong></th>
                                            <th><strong>LastName</strong></th>
                                            <th><strong>Phone Number</strong></th>
                                            <th><strong>Email</strong></th>
                                            <th><strong>Settings</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.list_client.map(
                                                (c)=>{
                                                    
                                                
                                            
                                        return <tr>
                                            <td>{c.FirstName}</td>
                                            <td>{c.LastName}</td>
                                            <td>{c.PhoneNumber}</td>
                                            <td>{c.Email}</td>
                                            <td>
                                                <button onClick={()=> this.deleteClient(c.id)} type="button" className="btn btn-outline-danger p-2 "><i className="fas fa-trash-alt" /></button>
                                            </td>
                                        </tr>
        
                                        })
                                    }
                                        
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
            </footer>
            <div className="fixed-plugin">
                <div className="dropdown show-dropdown">
                    <ul className="dropdown-menu">
                        <li className="header-title"> Sidebar Filters</li>
                        <li className="adjustments-line">
                            <a href="javascript:void(0)" className="switch-trigger active-color">
                                <div className="badge-colors ml-auto mr-auto">
                                    <span className="badge filter badge-purple" data-color="purple" />
                                    <span className="badge filter badge-azure" data-color="azure" />
                                    <span className="badge filter badge-green" data-color="green" />
                                    <span className="badge filter badge-warning" data-color="orange" />
                                    <span className="badge filter badge-danger" data-color="danger" />
                                    <span className="badge filter badge-rose active" data-color="rose" />
                                </div>
                                <div className="clearfix" />
                            </a>
                        </li>
                        <li className="header-title">Images</li>
                        <li className="active">
                            <a className="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-1.jpg" alt />
                            </a>
                        </li>
                        <li>
                            <a className="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-2.jpg" alt />
                            </a>
                        </li>
                        <li>
                            <a className="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-3.jpg" alt />
                            </a>
                        </li>
                        <li>
                            <a className="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-4.jpg" alt />
                            </a>
                        </li>
                        <li className="button-container">
                            <a href="https://www.creative-tim.com/product/material-dashboard" target="_blank" className="btn btn-primary btn-block">Free Download</a>
                        </li>
                        {/* <li class="header-title">Want more components?</li>
<li class="button-container">
    <a href="https://www.creative-tim.com/product/material-dashboard-pro" target="_blank" class="btn btn-warning btn-block">
      Get the pro version
    </a>
</li> */}
                        <li className="button-container">
                            <a href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html" target="_blank" className="btn btn-default btn-block">
                                View Documentation
          </a>
                        </li>
                        <li className="button-container github-star">
                            <a className="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                        </li>
                        <li className="header-title">Thank you for 95 shares!</li>
                        <li className="button-container text-center">
                            <button id="twitter" className="btn btn-round btn-twitter"><i className="fa fa-twitter" /> · 45</button>
                            <button id="facebook" className="btn btn-round btn-facebook"><i className="fa fa-facebook-f" /> · 50</button>
                            <br />
                            <br />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        </AdminTheme>
        )
    }

    deleteClient = (idClient)=>{
        let choice = window.confirm("Are you sure?");
    
        if (choice == true) {

          axios.delete("clients/" + idClient + ".json").then(() => {
            let newList = this.state.list_client;
            newList = newList.filter((c) => c.id !== idClient);
    
            this.setState({ list_client: newList })
        
    
        })
   
    }

    }}






