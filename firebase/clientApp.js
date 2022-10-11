import {initializeApp} from 'firebase/app'
import {getDatabase} from 'firebase/database'
import 'firebase/firestore'
import dotenv from 'dotenv'
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN ,
  databaseURL: process.env.DB_URL,
  projectId: "battle-of-the-shadow-tomb",
  storageBucket: "battle-of-the-shadow-tomb.appspot.com",
  messagingSenderId: process.env.MS_ID,
  appId:process.env.APP_ID,
  measurementId: process.env.M_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)