import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBBJy_T4la6awTQbAYIfzoVfjQeQQyBITA",
  authDomain: "books-resale.firebaseapp.com",
  projectId: "books-resale",
  storageBucket: "books-resale.appspot.com",
  messagingSenderId: "62201284066",
  appId: "1:62201284066:web:ea0a8283a029ca7f8d25bb"
  };

firebase.initializeApp(firebaseConfig);

export {firebase};

  