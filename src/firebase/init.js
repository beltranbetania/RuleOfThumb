import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7NNeYd8yORHdaQMBuZiykWsEhxuQXLwo",
  authDomain: "ruleofthumbs-de636.firebaseapp.com",
  projectId: "ruleofthumbs-de636",
  storageBucket: "ruleofthumbs-de636.appspot.com",
  messagingSenderId: "139984866155",
  appId: "1:139984866155:web:2dc198581bbbada5bdda2e"
};


initializeApp(firebaseConfig)
const db = getFirestore()


export {db}