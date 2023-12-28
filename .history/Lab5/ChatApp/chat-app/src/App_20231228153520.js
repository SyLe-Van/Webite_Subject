import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState, useDarkMode } from "./hooks";
import Button from "./components/Button";

firebase.initializeApp({
  apiKey: "AIzaSyAP17OqTo42fGY-rdd5fX8pn8K5f9sIhFA",
  authDomain: "chat-app-286f4.firebaseapp.com",
  projectId: "chat-app-286f4",
  storageBucket: "chat-app-286f4.appspot.com",
  messagingSenderId: "239108263525",
  appId: "1:239108263525:web:71eab2bbd6f11dd254408c",
});
const auth = firebase.auth;
export default function App() {
  const signInWithGoogle = async () => {
    const provider = new auth.GoogleAuthProvider();
    auth.useDeviceLanguage();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  return <div></div>;
}
