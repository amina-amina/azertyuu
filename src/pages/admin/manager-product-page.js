import React, { Component } from 'react'
import AdminTheme from '../../theme/admin'
import Product from '../../components/product/product'
import ProductModel from '../../models/product-model'
import axios from '../../utils/axios'
import CategorieModel from '../../models/categorie-model'

export default class ManagerProductPage extends Component {
    constructor(){
        super()
        this.state={
            avatar:"",
            title:"",
            quantity:"",
            price:"",
            categorie:"",
            description:"",
            updatedproduct:-1,
            list_product:[],
            list_categorie:[],
            textBtnState:"ADD",
            action:"ADD"
        }
    }
    
    componentDidMount() {
        axios.get("categories.json").then((response) => {
          if (response.data != null) {
            //extraire toutes les clé de l'objet data
            let keys = Object.keys(response.data);
    
            //parcourir les keys
            let listcategorienew = keys.map((k) => {
              let ns = new CategorieModel(
                k,
                response.data[k].nom,
                response.data[k].description,
               
              );
    
              return ns;
            });
    
            //ajouter la liste
            this.setState({ list_categorie: listcategorienew });
            this.setState({ backup: listcategorienew });
    
            //ajouter un backup
           
          }
        });

        axios.get("products.json").then((response) => {
            if (response.data != null) {
              //extraire toutes les clé de l'objet data
              let keys = Object.keys(response.data);
      
              //parcourir les keys
              let listproductnew = keys.map((k) => {
                let ns = new ProductModel(
                  k,
                  response.data[k].avatar,
                  response.data[k].title,
                  response.data[k].quantity,
                  response.data[k].price,
                  response.data[k].categorie,
                  response.data[k].description,
                 
                );
      
                return ns;
              });
      
              //ajouter la liste
              this.setState({ list_product: listproductnew });
              this.setState({ backup: listproductnew  });
      
              //ajouter un backup
             
            }
          });
      }
    render() {
        return (
            <div>
                <AdminTheme>
                    <Product
                    change={this.change}
                    submitADD={this.submitADD}
                    data={this.state.list_product}
                    dataSelect={this.state.list_categorie}
                    remove={this.remove}
                    search={this.search}
                    edit={this.edit}
                    textBtnState={this.state.textBtnState}
                    action={this.state.action}
                    submitEditProduct={this.submitEditProduct}
                    avatar={this.state.avatar}
                    title={this.state.title}
                    quantity={this.state.quantity}
                    price={this.state.price}
                    categorie={this.state.categorie}
                    description={this.state.description}

                    >
                        
                    </Product>
                </AdminTheme>
            </div>
        )
    }
    change=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
console.log(name,value)
        this.setState({ [name]: value })

    }
    submitADD=(event)=>{
        event.preventDefault();
        //vider les inputs de formulaire
        event.target.reset();

        //validation de formulaire
        if (
            this.state.title == ""||
            this.state.quantity==""||
            this.state.price==""||
            this.state.categorie==""
        ) {
            alert("veuillez remplir toutes les champs de produits")
        } else {
            let nvProduct = new ProductModel(
                0,
                this.state.avatar,
                this.state.title,
                this.state.quantity,
                this.state.price,
                this.state.categorie,
                this.state.description

            )
            //vider states
            this.setState({
                avatar: "",
                title: "",
                quantity:"",
                price:"",
                categorie:"",
                description:""



            })
            //ajouter student a la liste
            let newproductList = this.state.list_product
            newproductList.push(nvProduct)
            console.log(newproductList)
            this.setState({ list_product: newproductList  })


            const data_product = {
            
                avatar: nvProduct.avatar,
                title: nvProduct.title,
                quantity: nvProduct.quantity,
                price: nvProduct.price,
                categorie: nvProduct.categorie,
                description: nvProduct.description
               
              };
        
              axios.post("products.json", data_product).then((response) => {
                //console.log(response)
                let id_new_product = response.data.name;
               
        
                //chercher l'etudiant qui a l'Id==0 sur la liste
                let newListproduct= this.state.list_product;
                newListproduct.forEach((s) => {
                  if (s.id == 0) {
                    s.id = id_new_product;
                  }
                  //modifier la liste sur le state
        
                });
                this.setState({ list_product: newListproduct })
               
              });
        

        }
    }
    remove = (idProduct) => {
      let choice = window.confirm("Are you sure?");
  
      if (choice == true) {
       
        axios.delete("products/" + idProduct + ".json").then(() => {
          let newList = this.state.list_product;
          newList = newList.filter(
            (s) => s.id !== idProduct);
  
          this.setState({ list_product: newList })
          //changer le backup aussi
          this.setState({ backup: newList })
         
  
        });
      }
  
    }

    search = (event) => {
      //concerver notre liste
      // this.setState({backupList:this.state.list_student_data})
  
      let query = event.target.value.toLowerCase();
  
      //changer la liste
      if (query == "") {
        this.setState({ list_product: this.state.backup })
      } else {
        let newList = this.state.list_product.filter(s =>
          s.title.toLowerCase().includes(query) ||
          s.categorie.toLowerCase().includes(query)
        );
  
  
        this.setState({ list_product: newList })
      }
  
      //console.log(event.target.value)
  
    }



    edit = (uProduct) => {

      //changer le text button newStudent
      this.setState({ textBtnState: "Edit " })
  
  
  
  
      //ajouter les informations au state
      this.setState({
        avatar: uProduct.avatar,
        title: uProduct.title,
        quantity: uProduct.quantity,
        price: uProduct.price,
        categorie: uProduct.categorie,
        description: uProduct.description,
  
      })
  
      //changer l'action du state
      this.setState({ action: "edit" });
      //afficher cancel edit btn
      //this.setState({cancelEditState:true})
  
  
  
  
  
  
    }
  
    submitEditProduct = (event) => {
      this.setState({ textBtnState: "add" })
  
      // alert(1)
  
      //ne pas acctualiser la page
      event.preventDefault();
  
      //partie data a envoyer a firebase
      const product_data = {
        avatar: this.state.avatar,
        title: this.state.title,
        quantity: this.state.quantity,
        price: this.state.price,
        categorie: this.state.categorie,
        description: this.state.description
  
  
      }
  
      //appel a la fonction put de axios
      axios
        .put("products/" + this.state.updatedproduct + ".json", product_data)
        .then((response) => {
  
          //changer l'etudiant dans la liste
          let newList = this.state.list_product;
          newList.forEach((s) => {
            if (s.id == this.state.updatedproduct) {
              s.avatar = response.data.avatar;
              s.title = response.data.title;
              s.quantity = response.data.quantity;
              s.price = response.data.price;
              s.categorie = response.data.categorie;
              s.description = response.data.description;
  
            }
          });
          //modifier la liste du state
          this.setState({ list_product: newList })
          //modifier la liste backup aussi
          this.setState({ backup: newList });
  
          //vider le formulaire
          event.target.reset();
  
          //vider les variables state
          this.setState({
            avatar: "",
            title: "",
            quantity: "",
            price: "",
            categorie: "",
            description: "",
  
  
  
  
          })
        });
    }
  
}


