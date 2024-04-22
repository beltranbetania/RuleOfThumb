import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAoUHBpzdnZVMWaYoxIw_AHq0xZ_GTqTW8",
  authDomain: "rule-of-thumbs-2.firebaseapp.com",
  projectId: "rule-of-thumbs-2",
  storageBucket: "rule-of-thumbs-2.appspot.com",
  messagingSenderId: "253902394991",
  appId: "1:253902394991:web:62a5999893d5f2163d1f9a",
  measurementId: "G-20P7R1FKS4"
};

initializeApp(firebaseConfig)
const db = getFirestore()


export {db}