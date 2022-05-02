// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgTyrlDNM0EzDugFb_nYbJqmv1Ona_lA4",
  authDomain: "toys-warehouse.firebaseapp.com",
  projectId: "toys-warehouse",
  storageBucket: "toys-warehouse.appspot.com",
  messagingSenderId: "360582764101",
  appId: "1:360582764101:web:bdb6c02b9d0736b0b7752c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;