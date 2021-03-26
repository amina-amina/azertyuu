import React from 'react'
import CategorieTrait from './categorie-trait'

export default function Categorie(props) {
  return (
    <div>
      <div>
        <div>
          <div className="container-fluid ">
            <div>
              <h2>Categorie</h2>
              <form onSubmit={props.action == "ADD" ? props.submit : props.submitEditCategorie  }>
                <div className="mb-4 w-50" style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                  <input
                    name="nom"
                    value={props.editNom}
                    onChange={props.change}
                    type="text"
                    placeholder=" Name"
                    className="form-control"
                    id="exampleFormControlInput1" />
                </div>
                <div className="mb-4 " style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                  <textarea
                    name="description"
                    value={props.editDesc}
                    onChange={props.change}
                    className="form-control" id="exampleFormControlTextarea1" placeholder=" Descriptions" rows={3} defaultValue={""} />
                </div>
                <button type="submit" className="btn btn-primary mb-5"



                >{props.textBtnState}</button>
              </form>
            </div>

            <div className="input-group mb-3">
              <input 
              onKeyUp={props.search}
              type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search" />
              </button>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header card-header-primary">
                    <h4 className="card-title">Categories </h4>
                    <p className="card-category" />
                  </div>
                  <div className="card-body table-responsive">git
                    <table className="table table-hover">
                      <thead className style={{ color: 'rgb(0, 0, 0)' }}>
                        <tr>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Settings</th>
                        </tr>
                        </thead>
                      <tbody >
                        {
                          props.data.map(s=> <CategorieTrait
                            key={s.id}
                            datadata={s}
                            remove={props.remove}
                            edit={props.edit}
                            editNom={props.editNom}
                            editDesc={props.editDesc}
                            action={props.action}
                            change={props.change}
                            submitEditCategorie={props.submitCategorie}
                            textBtnState={props.textBtnState}


                          />)

                        }
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
