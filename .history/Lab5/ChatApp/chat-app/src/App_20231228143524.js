import Button from "./components/Button";
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyAP17OqTo42fGY-rdd5fX8pn8K5f9sIhFA",
  authDomain: "chat-app-286f4.firebaseapp.com",
  projectId: "chat-app-286f4",
  storageBucket: "chat-app-286f4.appspot.com",
  messagingSenderId: "239108263525",
  appId: "1:239108263525:web:71eab2bbd6f11dd254408c",
});
const auth = getAuth(app);
export default function App() {
  const signInwithGoogle = async () => {
    const provider = new auth.GoogleAuthProvider(); // Use auth.GoogleAuthProvider
  };

  return <div></div>;
}
