import React from 'react'
import ProductTrait from './product-trait'

export default function Product(props) {
    return (
        <div>
            <div>
                <div className="container-fluid ">
                    <div>
                        <h2>Products</h2>
                        <form
                            onSubmit={props.action=="ADD" ? props.submitADD : props.submitEditProduct}>
                            <div className="mb-4 w-50" style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                                <input
                                    value={props.avatar}
                                    onChange={props.change}
                                    name="avatar"
                                    type="text" placeholder=" image" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-4 w-50" style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                                <input
                                value={props.title}
                                    onChange={props.change}
                                    name="title"
                                    type="text" placeholder=" Name" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-4 w-50" style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                                <input
                                value={props.quantity}
                                    onChange={props.change}
                                    name="quantity"
                                    type="number" min="1" placeholder=" Quantity" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-4 w-50" style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                                <input
                                value={props.price}
                                    onChange={props.change}
                                    name="price"
                                    type="number" min="0" placeholder=" Price" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <select
                            value={props.categorie}
                                name="categorie"
                                onChange={props.change}
                                className="form-select w-50 mb-4 p-2 " aria-label="Default select example">
                                <option selected> Select the categories</option>
                                {props.dataSelect.map(c => <option key={c.id} value={c.nom} >{c.nom}</option>)}
                            </select>
                            <div className="mb-4 " style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                                <textarea
                                value={props.description}
                                    name="description"
                                    onChange={props.change}
                                    className="form-control" id="exampleFormControlTextarea1" placeholder=" Descriptions" rows={3} defaultValue={""} />
                            </div>


                            <button
                            
                             type="submit" className="btn btn-primary mb-5">{props.textBtnState}</button>
                        </form>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                     onKeyUp={props.search}

                        type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button 
                   
                    className="btn btn-primary"
                     type="button" id="button-addon2"><i className="fas fa-search" />
                    </button>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Product List</h4>
                                <p className="card-category" />
                            </div>
                            <div className="card-body table-responsive">
                                <table className="table table-hover">
                                    <thead className style={{ color: 'rgb(0, 0, 0)' }}>
                                        <tr><th>Image</th>
                                            <th>Title</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Categorie</th>
                                            <th>Description</th>
                                            <th>Settings</th>
                                        </tr></thead>
                                    <tbody>

                                        {
                                            props.data.map(s => <ProductTrait
                                                key={s.id}
                                                datadata={s}
                                                remove={props.remove}
                                                edit={props.edit}


                                            />)

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

    )
}
