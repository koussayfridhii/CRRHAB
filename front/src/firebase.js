// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC4netJ94D_9zzKsLj8R_S6DOtcZwdXtg",
  authDomain: "crrhab-358e9.firebaseapp.com",
  projectId: "crrhab-358e9",
  storageBucket: "crrhab-358e9.appspot.com",
  messagingSenderId: "1058309524635",
  appId: "1:1058309524635:web:bc0b20b96372c5e6390a3e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
