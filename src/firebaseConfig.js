import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArdfPQfLNAjDoq1nrpgNl3QEdVewMkj7k",
  authDomain: "komyut-e6b5e.firebaseapp.com",
  projectId: "komyut-e6b5e",
  storageBucket: "komyut-e6b5e.appspot.com",
  messagingSenderId: "625846810780",
  appId: "1:625846810780:web:f1502571d62d450a8dd559",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db, signOut, onAuthStateChanged };
