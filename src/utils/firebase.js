import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOzxHDTI-7VEghtn_mssXUr6r4HNmgknY",
  authDomain: "ecomusic-12265.firebaseapp.com",
  projectId: "ecomusic-12265",
  storageBucket: "ecomusic-12265.appspot.com",
  messagingSenderId: "461381876681",
  appId: "1:461381876681:web:fe9a8d5b36a35411734618",
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
