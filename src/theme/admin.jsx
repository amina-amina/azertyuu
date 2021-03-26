import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/dash.css"

export default function AdminTheme(props) {
    return (

        <div>
            <div className="wrapper ">
                <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                    {/*
  Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

  Tip 2: you can also add an image using data-image tag
    */}
                    <div className="logo"><a href="#" className="simple-text logo-normal">
                        E-commerce 
      </a></div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                          <Link to="/dash">
                              <li className="  ">
                                <a className="nav-link" href="./dash">
                                    <i className="material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            </Link>
                            {/* <li className="nav-item ">
                                <a className="nav-link" href="./user.html">
                                    <i className="material-icons">person</i>
                                    <p>User Profile</p>
                                </a>
                            </li> */}

                            <Link to="/categories">
                                <li className="nav-item ">
                                    <a className="nav-link" href="./categories">
                                        <i className="material-icons">content_paste</i>
                                        <p>Categories</p>
                                    </a>
                                </li>
                            </Link>

                            <Link to ="/productes">
                                <li className="nav-item ">
                                    <a className="nav-link" href="./productes">
                                        <i className="material-icons">library_books</i>
                                        <p>Products</p>
                                    </a>
                                </li>
                            </Link>

                            <Link to ="/orders">
                            <li className="nav-item ">
                                <a className="nav-link" href="./orders">
                                    <i className="material-icons">storefront</i>
                                    <p>Orders</p>
                                </a>
                            </li>
                            </Link>

                            <Link to="/customers">
                                <li className="nav-item ">
                                <a className="nav-link" href="./rtl.html">
                                    <i className="material-icons">people</i>
                                    <p>Customers</p> 
                                </a>
                            </li>
                            </Link>

                        </ul>
                    </div>
                </div>
                <div className="main-panel">
                    {/* Navbar */}
                    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                               <a className="navbar-brand" href="javascript:;"></a>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="navbar-toggler-icon icon-bar" />
                                <span className="navbar-toggler-icon icon-bar" />
                                <span className="navbar-toggler-icon icon-bar" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-end">
                                <form className="navbar-form">
                                    <div className="input-group no-border">
                                        <input type="text"className="form-control" placeholder="Search..." />
                                        <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                            <i className="material-icons">search</i>
                                            <div className="ripple-container" />
                                        </button>
                                    </div>
                                </form>
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Mike John responded to your email</a>
                                            <a className="dropdown-item" href="#">You have 5 new tasks</a>
                                            <a className="dropdown-item" href="#">You're now friend with Andrew</a>
                                            <a className="dropdown-item" href="#">Another Notification</a>
                                            <a className="dropdown-item" href="#">Another One</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="material-icons">person</i>
                                            <p className="d-lg-none d-md-block">
                                                Account
                </p>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                                            <a className="dropdown-item" href="#">Profile</a>
                                            <a className="dropdown-item" href="#">Settings</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">Log out</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* End Navbar */}
                    <div className="content">
                {props.children}
                </div>
                </div>
                </div>


             
            <div/>
        </div>
       
    )
}
