import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAptWyD4ZEw9D1yx9V8r4eVrgIQkB86-gA",
  authDomain: "almacen-abuelos.firebaseapp.com",
  projectId: "almacen-abuelos",
  storageBucket: "almacen-abuelos.appspot.com",
  messagingSenderId: "471553768874",
  appId: "1:471553768874:web:e75173d83ae724f7ab7fd3",
  measurementId: "G-4YJVQPJEJG",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
  firebase,
  db,
};
