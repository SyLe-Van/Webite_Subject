import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
export default function App() {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
  };
  return <div></div>;
}
