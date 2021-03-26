import React, { Component } from 'react'
import Register from '../../components/register'
import AuthContext from '../../shared/auth/Auth-context';
import {auth} from "../../utils/firebase"
export default class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      pass: "",
      repeatedPassword: ""

    }
  }
  render() {
    return (
      <Register handlechange={this.handelchangeInput}
        handlesubmit={this.signup}
      />
    )
  }

  // handle change input
  handelchangeInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    // change state
    this.setState({ [name]: value })
  }
  // sign up 
  signup = (event) => {
    event.preventDefault();
    // vider input
    event.target.reset()
    // validation du formulaire
    if (
      this.state.fullname === "" ||
      this.state.email === "" ||
      this.state.pass === "" ||
      this.state.repeatedPassword === ""
    ) {
      alert("Veuillez remplir toutes les champs du formulaire 😭")
    }
    else if (this.state.repeatedPassword !== this.state.pass) {
      alert("Veuillez saisir le meme mot de passe 🤬")
    }
    else {
      // utiliser register du auth-context
      this.context.register(this.state.email, this.state.pass).then((response) => {

auth.onAuthStateChanged((user)=>{
 user.updateProfile({
   displayName:this.state.firstname+""+this.state.lastname
 }).then((response)=>{
   console.log(response);
 })
})

      })
        .catch((error) => {
          alert(error.message)
        }
        )
      }
  } 
  }

// liaison avec authProvider 
RegisterPage.contextType = AuthContext;


