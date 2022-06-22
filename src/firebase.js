import { firestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDFCyVx0svRELkympaEGa0IXW5r0PnCRTE",
    authDomain: "login-ad768.firebaseapp.com",
    projectId: "login-ad768",
    storageBucket: "login-ad768.appspot.com",
    messagingSenderId: "130602005190",
    appId: "1:130602005190:web:e142f77ea3cd7c4bca9dc7",
    measurementId: "G-1365Q36W6L"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
