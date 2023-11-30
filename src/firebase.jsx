// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD14YnNYMPyounPiN_riD-J5sTTePX7Sow",
  authDomain: "iot2023a-d0419.firebaseapp.com",
  databaseURL: "https://iot2023a-d0419-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot2023a-d0419",
  storageBucket: "iot2023a-d0419.appspot.com",
  messagingSenderId: "1082064392036",
  appId: "1:1082064392036:web:3f8e06b229c8c4c415f471",
  measurementId: "G-WCLQCCQK17"
};

firebase.initializeApp(firebaseConfig);

export default firebase;