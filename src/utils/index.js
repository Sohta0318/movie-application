import firebase from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyDg32BqTW3Gxu9IoGB-RhV89dUSkMLg4Bw",
  authDomain: "movie-931e2.firebaseapp.com",
  projectId: "movie-931e2",
  storageBucket: "movie-931e2.appspot.com",
  messagingSenderId: "37510736313",
  appId: "1:37510736313:web:83a4c5803c00d7ab922e68",
}

firebase.initializeApp(config)

const firestore = firebase.firestore()

export { firestore }
