import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiCOb3q77I-YwWijrqm2AF4M9TtBfvHLo",
  authDomain: "form-chits.firebaseapp.com",
  projectId: "form-chits",
  storageBucket: "form-chits.appspot.com",
  messagingSenderId: "693954055556",
  appId: "1:693954055556:web:d25c61db47c14c6cc961d1",
  measurementId: "G-V969YD1SWF",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
