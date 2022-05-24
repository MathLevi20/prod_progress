import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



export { db };
export { auth };
export function singup(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
}