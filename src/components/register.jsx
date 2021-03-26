import React from 'react'
import { Link } from 'react-router-dom';
import "../assets/main.css"
import background from "../assets/bg-01.jpg";

export default function Register(props) {
    return (
        <div>
<div className="limiter">
  <div className="container-login100">
    <div className="login100-more" style={{ backgroundImage: `url(${background})` }} />
    <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
      <form onSubmit={props.handlesubmit}
      className="login100-form validate-form">
        <span className="login100-form-title p-b-59">
          Sign Up
        </span>
        <div className="wrap-input100 validate-input" data-validate="Name is required">
          <span className="label-input100">Full Name</span>
          <input 
          onChange={props.handlechange}
          className="input100" type="text" name="fullname" placeholder="Name..." />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
          <span className="label-input100">Email</span>
          <input 
          onChange={props.handlechange}
          className="input100" type="text" name="email" placeholder="Email addess..." />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Password is required">
          <span className="label-input100">Password</span>
          <input
          onChange={props.handlechange}
          className="input100" type="password" name="pass" placeholder="*************" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Repeat Password is required">
          <span className="label-input100">Repeat Password</span>
          <input
          onChange={props.handlechange}
          className="input100" type="password" name="repeatedPassword" placeholder="*************" />
          <span className="focus-input100" />
        </div>
        <div className="flex-m w-full p-b-33">
          <div className="contact100-form-checkbox">
            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
          </div>
        </div>
        <div className="container-login100-form-btn">
          <div className="wrap-login100-form-btn">
            <div className="login100-form-bgbtn" />
            <button type="submit" className="login100-form-btn">
              Sign Up
            </button>
          </div>
          <Link to="/admin" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30 text-center">Sing In</Link>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    )
}
