// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBefAFEh1NVnt2YaSBn9KMkmKWy6ieZKV8",
  authDomain: "iot2023-7a185.firebaseapp.com",
  databaseURL: "https://iot2023-7a185-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot2023-7a185",
  storageBucket: "iot2023-7a185.appspot.com",
  messagingSenderId: "766170917410",
  appId: "1:766170917410:web:acb8a3c7663131f16ab87b",
  measurementId: "G-5H6EMVGPHY"
};


firebase.initializeApp(firebaseConfig);

export default firebase;