import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA7NoSUitWSlouKqFLZHQDsmRBZOBRN7M0",
    authDomain: "tech-vet.firebaseapp.com",
    projectId: "tech-vet",
    storageBucket: "tech-vet.firebasestorage.app",
    messagingSenderId: "621428537774",
    appId: "1:621428537774:web:eee2f9039211edffc8303f"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
