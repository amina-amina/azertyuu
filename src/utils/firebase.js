  import firebase from 'firebase/app'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDT-q38VLMIbQp6Dk2mkiYVrn_R53rnF8E",
    authDomain: "starterprojetecommerce.firebaseapp.com",
    databaseURL: "https://starterprojetecommerce-default-rtdb.firebaseio.com",
    projectId: "starterprojetecommerce",
    storageBucket: "starterprojetecommerce.appspot.com",
    messagingSenderId: "1055829109402",
    appId: "1:1055829109402:web:be31ab0da1381d89e2cd23",
    measurementId: "G-EHZ3DWVH39"

  };

  const app=firebase.initializeApp(firebaseConfig);
  // exporter notre base de donnees 
  export default app;
  // export the auth app
 export const auth = app.auth();
 