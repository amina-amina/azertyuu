import React, { Component } from 'react'
import {auth} from "../../utils/firebase"
// creat authContext from react
const AuthContext=React.createContext();

export class AuthProvider extends Component {

// data shared 
constructor(props){
    super(props)
    this.state={
    currentUser:{}
    }
}
componentDidMount(){
    auth.onAuthStateChanged((user)=>{
      this.setState({currentUser:user})
    })
  }

// shared features
login=(email,password)=>{
return auth.signInWithEmailAndPassword(email,password)
}
register=(email,password)=>{
return auth.createUserWithEmailAndPassword(email,password)
}
logout=()=>{
return auth.signOut()
}

    render() {

        return (
         <AuthContext.Provider value={
             {
           currentUser :this.state.currentUser ,
            login:this.login,
            logout:this.logout,
            register:this.register   
         }
            }
            >
             {this.props.children}
         </AuthContext.Provider>
        )
    }
}

export default AuthContext;


