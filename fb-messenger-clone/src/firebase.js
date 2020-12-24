import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvTk00wkvpn7mk9ZH8F6GudHHhX6N5ubc",
  authDomain: "facebook-messenger-clone-dcea5.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-dcea5.firebaseio.com",
  projectId: "facebook-messenger-clone-dcea5",
  storageBucket: "facebook-messenger-clone-dcea5.appspot.com",
  messagingSenderId: "274928767800",
  appId: "1:274928767800:web:89a00b43f8ef3a1e26e7cd",
  measurementId: "G-CG3JT0E25L",
});

const db = firebaseApp.firestore();

export default db;
