import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2rgtF48jjNdxfQEzHtxdr9UemLpf3sc8",
  authDomain: "disney-plus-clone-6b9ce.firebaseapp.com",
  projectId: "disney-plus-clone-6b9ce",
  storageBucket: "disney-plus-clone-6b9ce.appspot.com",
  messagingSenderId: "110961864288",
  appId: "1:110961864288:web:dd114c40a90ea26f235d05",
  measurementId: "G-MCWQBDBQSZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
