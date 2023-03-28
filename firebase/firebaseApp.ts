// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLxuxZzLF7iuatafM4CwuHWIDjG2njJow",
  authDomain: "beebuildr.firebaseapp.com",
  projectId: "beebuildr",
  storageBucket: "beebuildr.appspot.com",
  messagingSenderId: "683791276500",
  appId: "1:683791276500:web:e205b52867166674999e41",
  measurementId: "G-FQNX48F5GT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Export function to initialize firebase
export const initFirebase = () => {
  return app;
};
