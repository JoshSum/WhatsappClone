import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmP-0PoLm_QVI_XatNNSVcx-5oZryIBHM",
  authDomain: "whatsapp-clone-using-nextjs.firebaseapp.com",
  projectId: "whatsapp-clone-using-nextjs",
  storageBucket: "whatsapp-clone-using-nextjs.appspot.com",
  messagingSenderId: "884336028118",
  appId: "1:884336028118:web:babd4e372d242c15069c77",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
