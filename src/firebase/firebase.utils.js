import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAf6yEv0QokysjkEcjh7JxIZiMve-uI6Jg",
    authDomain: "crwn-db-5a81e.firebaseapp.com",
    databaseURL: "https://crwn-db-5a81e.firebaseio.com",
    projectId: "crwn-db-5a81e",
    storageBucket: "crwn-db-5a81e.appspot.com",
    messagingSenderId: "204263475936",
    appId: "1:204263475936:web:73af88f6ea034944625e85",
    measurementId: "G-M2PCBJKBCF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;