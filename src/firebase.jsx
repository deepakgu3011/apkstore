import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";  // Import storage-related functions

const firebaseConfig = {
    apiKey: "AIzaSyD4VwE8gc0MzAs7pRVM7NsFVof89yVGt1o",
    authDomain: "apps-bc2d5.firebaseapp.com",
    projectId: "apps-bc2d5",
    storageBucket: "apps-bc2d5.firebasestorage.app",
    messagingSenderId: "528452030726",
    appId: "1:528452030726:web:fbd6769e4b449b6d2e0e87"
  };
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); 
const db = getFirestore(app);
const storage = getStorage(app);  // Initialize Firebase storage

export { auth, db, storage };  // Export storage alongside auth and db
