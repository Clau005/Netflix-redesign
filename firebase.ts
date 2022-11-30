// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjOe1vukCIb9d3U_h2lEepOZgAm9oTn4s",
    authDomain: "netflix-clone-2ac28.firebaseapp.com",
    projectId: "netflix-clone-2ac28",
    storageBucket: "netflix-clone-2ac28.appspot.com",
    messagingSenderId: "720107944808",
    appId: "1:720107944808:web:0243ce1ced795ee94774dd",
    measurementId: "G-Z45TY7B8Z9"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }