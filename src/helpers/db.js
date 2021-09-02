import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAVoQadNgnSkFXt_lQRkBlSwYYvP92gWSo",
  authDomain: "login-signup-page-2151d.firebaseapp.com",
  databseURL: "https://login-signup-page-2151d.firebaseio.com",
  projectId: "login-signup-page-2151d",
  storageBucket: "login-signup-page-2151d.appspot.com",
  messagingSenderId: "216890875727",
  appId: "1:216890875727:web:88c4c0c93daa57e7f32f3a"
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;