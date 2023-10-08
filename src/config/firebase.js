import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDAH_5QDaSFK7MUqHA-QGGCxfDdumcPdlo",
  authDomain: "fir-aa553.firebaseapp.com",
  projectId: "fir-aa553",
  storageBucket: "fir-aa553.appspot.com",
  messagingSenderId: "264916372928",
  appId: "1:264916372928:web:619ee9e818318cd3420c25",
  measurementId: "G-VZ2H4F1YR0"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
