import { initializeApp } from "firebase/app";
import {auth} from 'firebase/auth'

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ecommerce-project-d094e.firebaseapp.com",
  projectId: "ecommerce-project-d094e",
  storageBucket: "ecommerce-project-d094e.firebasestorage.app",
  messagingSenderId: "876164124375",
  appId: "1:876164124375:web:4ce3a2db9b3bb50645aa92"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {auth, app};
