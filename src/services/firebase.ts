import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: process.env.NEXT_APP_API_KEY,
    authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
    databaseURl: process.env.NEXT_APP_DATABASE_URL,
    projectId: process.env.NEXT_APP_PROJECT_ID,
    storageBucket: process.env.NEXT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_APP_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_APP_ID
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database()