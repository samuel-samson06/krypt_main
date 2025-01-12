// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx1P59kX-SQC69LW4oATMo0lVSunCYY-g",
  authDomain: "krypt-ca3a4.firebaseapp.com",
  projectId: "krypt-ca3a4",
  storageBucket: "krypt-ca3a4.firebasestorage.app",
  messagingSenderId: "890251781643",
  appId: "1:890251781643:web:f69575fb75584b0338890e",
  measurementId: "G-8Q3CD35NT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const createUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

export const signInUser = async(email,password)=>{
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }catch(error){
        console.error("Error signing in user:", error);
        throw error;
    }
}

export const signOutUser = async()=>{
    try{
        await signOut(auth);
        return true;
    }catch(error){
            console.error("Error signing out user:", error);
            throw error;
        }
}

export const saveUserInFirestore = async (user) => {
    try{
        const userRef = doc(db,"users",user.uid);
        const userDoc = await setDoc(userRef,user);
        return userDoc;
    }catch(error){
        console.error("Error saving user in firestore:", error);
        throw error;
    }
}

export const getUserFromFirestore = async (uid) => {
    try{
        const userRef = doc(db,"users",uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            console.log("Document data:", userDoc.data());
            return userDoc.data();
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
    }catch(error){
        console.error("Error getting user from firestore:", error);
        throw error;
    }
}
