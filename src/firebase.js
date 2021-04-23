import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyAyXUK_nsmuk76PySSgeS2bZJ0IUZjv01M",
  authDomain: "disney-clone-b22d2.firebaseapp.com",
  projectId: "disney-clone-b22d2",
  storageBucket: "disney-clone-b22d2.appspot.com",
  messagingSenderId: "90310822260",
  appId: "1:90310822260:web:2dc3d7d578a77615be4421",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
