// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdB430D3OZ0iNd1yx2SUdmTcVH8jq7B-w",
  authDomain: "loveinatimeofallergies.firebaseapp.com",
  databaseURL: "https://loveinatimeofallergies-default-rtdb.firebaseio.com",
  projectId: "loveinatimeofallergies",
  storageBucket: "loveinatimeofallergies.appspot.com",
  messagingSenderId: "629691757878",
  appId: "1:629691757878:web:9ab37bdd7503401ab3af97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;