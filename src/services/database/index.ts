import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }
