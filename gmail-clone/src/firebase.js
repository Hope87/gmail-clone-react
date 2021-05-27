import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBb_p-g6CwUm1uqjeRV0CZtrOhOyWPfm5g",
  authDomain: "clone-fc899.firebaseapp.com",
  projectId: "clone-fc899",
  storageBucket: "clone-fc899.appspot.com",
  messagingSenderId: "1018366737216",
  appId: "1:1018366737216:web:a2cc65100be401fac158a5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
