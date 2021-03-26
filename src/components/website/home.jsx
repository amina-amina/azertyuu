import React from 'react'
import productimg from "../../assets/themefront/product2.jpg"

export default function Home(props) {
    return (


        <div id="content" class="col-sm-12">
            <div className="customtab">
                <div id="tabs" className="customtab-wrapper">
                    <ul className="customtab-inner">
                        <li className="tab"><a href="/#tab-latest" className="selected">All
          Products</a></li>
                    </ul>
                </div>
                <div id="tab-latest" className="tab-content" style={{ display: 'block' }}>
                    <div className="box">
                        <div id="latest-slidertab" className="row owl-carousel product-slider owl-theme" style={{ opacity: 1, display: 'block' }}>
                            <div className="owl-outer">
                                <div className="owl" style={{  display: 'block' }}>


                                    {props.list_product.map((p) => {

                                        return (
                                            <div className="owl-item" style={{ width: 240 }}>
                                                <div className="item">
                                                    <div className="product-thumb transition">
                                                        <div className="image product-imageblock"> <a href="/product"><img src={p.avatar} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group">
                                                                <button type="button" className="wishlist" data-toggle="tooltip" title data-original-title="Add to Wish List"><i className="fa fa-heart-o" /></button>
                                                                <button 
                                                                onClick={() => props.addToCart(p)}
                                                                type="button" className="addtocart-btn">Add to
                        Cart</button>
                                                                <button 
                                                                
                                                                type="button" className="compare" data-toggle="tooltip" title data-original-title="Compare this Product"><i className="fa fa-exchange" /></button>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail">
                                                            <h4 className="product-name"><a href="/#" title="iPod Classic">iPod
                        Classic</a></h4>
                                                            <p className="price product-price">{p.price}<span className="price-tax">Ex
                        Tax: $100.00</span></p>
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x" /><i className="fa fa-star-o fa-stack-2x" /></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x" /><i className="fa fa-star-o fa-stack-2x" /></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x" /><i className="fa fa-star-o fa-stack-2x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x" /></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x" /></span> </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <button type="button" className="wishlist" data-toggle="tooltip" title data-original-title="Add to Wish List"><i className="fa fa-heart-o" /></button>
                                                            <button 
                                                           
                                                            
                                                            type="button" className="addtocart-btn">Add to Cart</button>
                                                            <button type="button" className="compare" data-toggle="tooltip" title data-original-title="Compare this Product"><i className="fa fa-exchange" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    })}

                                </div></div></div></div></div></div></div>






    )



}




