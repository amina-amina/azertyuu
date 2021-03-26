import React, { Component } from 'react'
import Login from '../../components/login'
import AuthContext from '../../shared/auth/Auth-context';


export default class LgPage extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            pass: "",
        }

    }

    render() {
        return (
            <Login handlechange={this.handelchangeInput}
                handlesubmit={this.signup}
            />
        )

    }
    handelchangeInput = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        console.log(name,value)
        // change state
        this.setState({ [name]: value })
    }

    signup = (event) => {
        event.preventDefault();
        // vider input
        event.target.reset()
        // validation du formulaire
        if (
            this.state.email === "" ||
            this.state.pass === "" 
            )
    {
            alert("Veuillez remplir toutes les champs 😭")
        }
        else {
            // utiliser register du auth-context
            this.context.login(this.state.email, this.state.pass).then((response) => {
            })
                .catch((error) => {
                    alert(error.message)
                }
                )
        }
    }
}
LgPage.contextType = AuthContext

