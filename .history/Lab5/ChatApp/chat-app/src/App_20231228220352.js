import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useEffect, useState } from "react";

firebase.initializeApp({
  apiKey: "AIzaSyAP17OqTo42fGY-rdd5fX8pn8K5f9sIhFA",
  authDomain: "chat-app-286f4.firebaseapp.com",
  projectId: "chat-app-286f4",
  storageBucket: "chat-app-286f4.appspot.com",
  messagingSenderId: "239108263525",
  appId: "1:239108263525:web:71eab2bbd6f11dd254408c",
});
const auth = firebase.auth();
const firestore = firebase.firestore();
const db = firebase.firestore();
export default function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });
    return unsubscribe;
  }, []);
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  if (initializing) return "Loading...";
  return (
    <div>
      {user ? (
        "Welcome to Chat"
      ) : (
        <Button onclick={signInWithGoogle}>Sign in with Google</Button>
      )}
    </div>
  );
}
