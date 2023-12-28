import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { auth } from "./firebase";
import { useState } from "react";
export default function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}
