import React from 'react'

export default function Orders(props) {
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Orders</h4>
                                <p className="card-category" />
                            </div>
                            <div className="card-body table-responsive">
                                <table className="table table-hover">
                                    <thead className style={{ color: 'rgb(0, 0, 0)' }}>
                                        <tr><th>Client</th>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Status</th>
                                            <th>Total Price</th>
                                            <th>Contact information</th>
                                        </tr></thead>
                                    <tbody>
                                       
                                       
                                    {props.list_orders.map((o)=>
                                    
                                    
                                    <tr>
                                            <td>{o.fullname}</td>
                                            <td>{o.quantity}</td>
                                            <td>{o.price}</td>
                                            <td>
                                                <select 
                                                 onChange={props.change}
                                                 
                                                name="status"
                                                classname="form-select w-50 mb-4 p-2 " aria-label="Default select example">
                                                    <option
                                                    
                                                    selected></option>
                                                    <option value={"en attente"} >completed</option>
                                                    <option value={"processing"} >processing</option>
                                                    <option value={"delivered"} >delivered</option>
                                                    <option value={"canceled"}>canceled</option>
                                                </select>
                                            </td>
                                            <td>{o.title}</td>
                                            <td>{o.description}</td>
                                        </tr>
                                    
                                    
                                    
                                    )}  
                                      
                                        
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

    )
}
