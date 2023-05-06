import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJF-BLl5S5RFh2BmRztmZHZt9yeGtVVl0",
  authDomain: "chat-5c6e1.firebaseapp.com",
  projectId: "chat-5c6e1",
  storageBucket: "chat-5c6e1.appspot.com",
  messagingSenderId: "999427095600",
  appId: "1:999427095600:web:adb40e19374b4f959201f5",
  measurementId: "G-0LTSHKQF00"
};


export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();