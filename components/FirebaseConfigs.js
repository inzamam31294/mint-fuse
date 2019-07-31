import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBWM1uVVqmSV2pNvwuN8hGv0ROATZ0Y6HI',
  authDomain: 'mintfuse-ff79e.firebaseapp.com',
  databaseURL: 'https://mintfuse-ff79e.firebaseio.com',
  projectId: 'mintfuse-ff79e',
  storageBucket: 'mintfuse-ff79e.appspot.com',
  messagingSenderId: '37415793144',
  appId: '1:37415793144:web:2043f99dbd86056f'
}

// eslint-disable-next-line no-unused-expressions
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

// export default firebase

const db = firebase.firestore()
// firebase.firestore().settings({ timestampsInSnapshots: true })
export default db

// export const auth = firebase.auth()
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
