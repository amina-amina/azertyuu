import React, { useContext } from 'react'
import "../assets/themefront/home.css"
import MainBanner1 from "../assets/themefront/Main-Banner1.jpg";
import product from "../assets/themefront/subbanner1.jpg"
import logo from '../assets/themefront/logo.png'
import logofooter from '../assets/themefront/logo-footer.png'
import ma from '../assets/themefront/900px-Flag_of_Morocco.svg.png'
import MainBanner2 from "../assets/themefront/Main-Banner2.jpg"
import { Link } from "react-router-dom";

import ShoppingCartContext from "../shared/auth/shoppingCart-context";



export default function Client(props) {
  const { list_order_data } = useContext(ShoppingCartContext);
    return (

           <div >
          <div className="preloader" style={{display: 'none'}}> <img src="./E-Commerce_files/loader.gif" alt="#" /></div>
          <header>
            <div className="header-top">
              <div >
                <div className="row">
                  <div className="col-sm-12">
                    <div className="top-left pull-left">
                    <div className="btn-group ">
                           <img src={ma} width={30} height={20} /> 
                          <p className="currency px-3 mb-1"  style={{color:"white"}}>MAD</p> 
                      
                      </div>
                  

                       
                      
                    </div>
                    <div className="top-right pull-right">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="header-inner">
                <div className="col-sm-4 col-xs-6 header-left">
                </div>
                <div className="col-sm-4 col-xs-6 header-middle">
                  <div className="header-middle-top">
                    <div id="logo"> <a href="#"><img src={logo} title="E-Commerce" alt="E-Commerce" className="img-responsive" /></a> </div>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-6 header-right">
                  <div id="cart" className="btn-group btn-block">
                    <button type="button" className="btn btn-inverse btn-block btn-lg dropdown-toggle cart-dropdown-button"><span id="cart-total">
                      
                      

                    <button
                    
                    class="btn btn-dark">
            <i class="fa fa-shopping-basket mr-3"></i>
            <span class="badge badge-danger">{list_order_data.length}</span>
          </button>




                      
                      </span><i className="fa fa-caret-down" /></button>
                    <ul className="dropdown-menu pull-right cart-dropdown-menu">
                      <li>
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td className="text-center"><a href="/#"><img className="img-thumbnail" title="iPhone" alt="iPhone" src="./E-Commerce_files/7product50x59.jpg" /></a></td>
                              <td className="text-left"><a href="/#">iPhone</a>
                              </td>
                              <td className="text-right">x 1</td>
                              <td className="text-right">$254.00</td>
                              <td className="text-center"><button className="btn btn-danger btn-xs" title="Remove" type="button"><i className="fa fa-times" /></button></td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li>
                        <div>
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <td className="text-right"><strong>Sub-Total</strong></td>
                                <td className="text-right">$210.00</td>
                              </tr>
                              <tr>
                                <td className="text-right"><strong>Eco Tax (-2.00)</strong></td>
                                <td className="text-right">$2.00</td>
                              </tr>
                              <tr>
                                <td className="text-right"><strong>VAT (20%)</strong></td>
                                <td className="text-right">$42.00</td>
                              </tr>
                              <tr>
                                <td className="text-right"><strong>Total</strong></td>
                                <td className="text-right">$254.00</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="text-right"> <span className="btn-viewcart"><a href="#"><strong><i className="fa fa-shopping-cart" /> View Cart</strong></a></span>
                            <span className="btn-checkout"><a href="#"><strong><i className="fa fa-share" /> Checkout</strong></a></span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <nav id="menu" className="navbar main-menu">
            <div className="nav-inner container">
              <div className="navbar-header"><span id="category" className="visible-xs">Categories</span>
              </div>
              <div className="navbar-collapse">
                <ul className="main-navigation">
                  <li className="home_first"><a href="#" className="parent"> <Link to="/"> home</Link></a>
                  </li>
                  <li><a href="#" className="parent"><Link to="/shope">shope</Link></a> </li>
                  <li><a href="" className="parent"><Link to="/cart">cart</Link></a> </li>

                  <li><a href="#" className="parent">About us</a> </li>
                  <li><a href="#" className="parent">FAQ</a>
                  </li>
                  <li><a href="#" className="parent">Contact US</a> </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">  
         
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="3000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={MainBanner1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={MainBanner2} alt="Second slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>









            <div className="row">
              <div className="cms_banner">
                <div className="col-md-4 cms-banner-left"> <a href="/#"><img alt="#" src={product} /></a> </div>
                <div className="col-md-4 cms-banner-middle"> <a href="/#"><img alt="#" src={product} /></a> </div>
                <div className="col-md-4 cms-banner-right"> <a href="/#"><img alt="#" src={product} /></a> </div>
              </div>
            </div>
            <div className="row">
              <div id="column-left" className="col-sm-3 hidden-xs column-left">
                <div className="column-block">
                  <div className="columnblock-title">Categories</div>
                  <div className="category_block">
                    <ul className="box-category treeview-list treeview collapsable">
                      <li><a href="#">Tablets</a></li>
                      <li><a href="#">Software</a></li>
                      <li><a href="#">Phones &amp; PDAs</a></li>
                      <li><a href="#">Cameras</a></li>
                      <li className="last"><a href="#">MP3 Players</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* hahowa */}
              <div id="content" className="col-sm-9">
                {props.children}
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="footer-top-cms">
                <div className="footer-logo"> <a href="/#"><img alt="index" src={logofooter} /></a> </div>
                <div className="footer-desc"> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span> </div>
                <div className="footer-social">
                  <h5>Social</h5>
                  <ul>
                    <li className="facebook"><a href="#"><i className="fab fa-facebook" /></a></li>
                    <li className="linkedin"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    <li className="twitter"><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li className="youtube"><a href="#"><i className="fab fa-youtube" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 footer-block">
                  <h5 className="footer-title">Information</h5>
                  <ul className="list-unstyled ul-wrapper">
                    <li><a href>About Us</a></li>
                    <li><a href>Delivery Information</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                  </ul>
                </div>
                <div className="col-sm-3 footer-block">
                  <h5 className="footer-title">Customer Service</h5>
                  <ul className="list-unstyled ul-wrapper">
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Wish List</a></li>
                  </ul>
                </div>
                <div className="col-sm-3 footer-block">
                  <h5 className="footer-title">Extras</h5>
                  <ul className="list-unstyled ul-wrapper">
                    <li><a href="#">Brands</a></li>
                    <li><a href="#">Gift Vouchers</a></li>
                    <li><a href="#">Affiliates</a></li>
                    <li><a href="#">Specials</a></li>
                  </ul>
                </div>
                <div className="col-sm-3 footer-block">
                  <div className="content_footercms_right">
                    <div className="footer-contact">
                      <h5 className="contact-title footer-title">Contact Us</h5>
                      <ul className="ul-wrapper">
                        <li><i className="fa fa-map-marker" /><span className="location2"> Warehouse &amp;
                            Offices,<br />
                            12345 Street name, California<br />
                            USA</span></li>
                        <li><i className="fa fa-envelope" /><span className="mail2"><a href="#">info@localhost.com</a></span></li>
                        <li><i className="fa fa-mobile" /><span className="phone2">+ 0987-654-321</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a id="scrollup" style={{display: 'inline'}}>Scroll</a>
          </footer>
          <div className="footer-bottom">
            <div className="container">
              <div className="copyright">Made with ❤️<a className="yourstore" href> © 2021 </a>
              </div>
 
              </div>
            </div>
          </div>


    )
}
