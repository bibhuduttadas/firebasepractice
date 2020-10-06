import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyD4MQzlzRuJgRM6NZjNa0hwvkfN4lXMoes",
    authDomain: "newbe-71065.firebaseapp.com",
    databaseURL: "https://newbe-71065.firebaseio.com",
    projectId: "newbe-71065",
    storageBucket: "newbe-71065.appspot.com",
    messagingSenderId: "375167677450",
    appId: "1:375167677450:web:b126a07c28d1e3754e1bf3",
    measurementId: "G-FDZ52MCYPC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export {firebase};