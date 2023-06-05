// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBrx05zqzSkdICCiIkWXB2yomulDeM6Ops",
  authDomain: "corina-notes-react.firebaseapp.com",
  projectId: "corina-notes-react",
  storageBucket: "corina-notes-react.appspot.com",
  messagingSenderId: "883741594209",
  appId: "1:883741594209:web:2b6c7755eb39ba11ca1020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")