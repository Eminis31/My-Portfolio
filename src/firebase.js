import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDGoT_XHWTv6b4tGVCVLGDynn9s5LLOlg",
  authDomain: "my-portfolio-8ab3a.firebaseapp.com",
  projectId: "my-portfolio-8ab3a",
  storageBucket: "my-portfolio-8ab3a.firebasestorage.app",
  messagingSenderId: "150539995900",
  appId: "1:150539995900:web:b7f6ac5f856c1737b4e579",

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addContactMessage(data) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}