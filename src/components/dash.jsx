import React from 'react'
import "../assets/dash.css"
// cvbcfgngngf
export default function Dash() {
    return (
        <div >
            <div >
                <div >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header card-header-success card-header-icon">
                                        <div className="card-icon">
                                            <i className="material-icons">done_outline</i>
                                        </div>
                                        <p className="card-category">Completed</p>
                                        <h3 className="card-title">10
              </h3>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="material-icons">date_range</i> Last 24 Hours
              </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header card-header-warning card-header-icon">
                                        <div className="card-icon">
                                            <i className="material-icons">hourglass_top</i>
                                        </div>
                                        <p className="card-category">Processing</p>
                                        <h3 className="card-title">5</h3>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="material-icons">date_range</i> Last 24 Hours
              </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header card-header-info card-header-icon">
                                        <div className="card-icon">
                                            <i className="material-icons">local_shipping</i>
                                        </div>
                                        <p className="card-category">Delivered</p>
                                        <h3 className="card-title">15</h3>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="material-icons">date_range</i> Last 24 Hours
              </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header card-header-danger card-header-icon">
                                        <div className="card-icon">
                                            <i className="material-icons">clear</i>
                                        </div>
                                        <p className="card-category">Cancelled</p>
                                        <h3 className="card-title">0</h3>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="material-icons">date_range</i> Last 24 Hours
              </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-primary">
                                        <h4 className="card-title">Orders Status</h4>
                                        <p className="card-category" />
                                    </div>
                                    <div className="card-body table-responsive">
                                        <table className="table table-hover">
                                            <thead className="text-warning">
                                                <tr><th>ID</th>
                                                    <th>Name</th>
                                                    <th>Status</th>
                                                    <th>Contact</th>
                                                    <th>Quantity</th>
                                                </tr></thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Dakota Rice</td>
                                                    <td>$36,738</td>
                                                    <td>Niger</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Minerva Hooper</td>
                                                    <td>$23,789</td>
                                                    <td>Curaçao</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Sage Rodriguez</td>
                                                    <td>$56,142</td>
                                                    <td>Netherlands</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Philip Chaney</td>
                                                    <td>$38,735</td>
                                                    <td>Korea, South</td>
                                                    <td>2</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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

        </div>

    )
}
