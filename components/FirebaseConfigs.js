/* eslint-disable no-undef */
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

// eslint-disable-next-line no-unused-expressions
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

const db = firebase.firestore()

export default db

// export const auth = firebase.auth()
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
