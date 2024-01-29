import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG8i5zCDcKGFVbRrKYWHKaCEygJ5SO2Eo",
  authDomain: "orientacao-profissional-98992.firebaseapp.com",
  projectId: "orientacao-profissional-98992",
  storageBucket: "orientacao-profissional-98992.appspot.com",
  messagingSenderId: "266490454814",
  appId: "1:266490454814:web:67ad63666465ce7db01f0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)