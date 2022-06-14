// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqlNqjVl_Ybi1FJwJ2llLfpJZnIqi1-kU",
  authDomain: "assignment-11-16461.firebaseapp.com",
  projectId: "assignment-11-16461",
  storageBucket: "assignment-11-16461.appspot.com",
  messagingSenderId: "236234930120",
  appId: "1:236234930120:web:eb2146cbf3d44d2f86f2fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;