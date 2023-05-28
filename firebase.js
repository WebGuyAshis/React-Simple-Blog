import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
  const firebaseConfig = {
    apiKey: "AIzaSyD7ty1YXf_xSZ2CbcyIqBHtmZRMeSMRkQQ",
    authDomain: "blog-bfca0.firebaseapp.com",
    projectId: "blog-bfca0",
    storageBucket: "blog-bfca0.appspot.com",
    messagingSenderId: "630122875055",
    appId: "1:630122875055:web:41184c9506fb4318f26c5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();