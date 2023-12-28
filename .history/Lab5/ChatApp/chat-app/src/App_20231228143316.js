import Button from "./components/Button";
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAP17OqTo42fGY-rdd5fX8pn8K5f9sIhFA",
  authDomain: "chat-app-286f4.firebaseapp.com",
  projectId: "chat-app-286f4",
  storageBucket: "chat-app-286f4.appspot.com",
  messagingSenderId: "239108263525",
  appId: "1:239108263525:web:71eab2bbd6f11dd254408c",
});
const auth = getAuth();
function App() {
  const signInwithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
  };
  return <div></div>;
}

export default App;
