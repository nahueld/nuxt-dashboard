import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCwZKubkjIhYpY5LwcVmQSmoYnfkutDg2k',
  authDomain: 'nuxt-dashboard-7c6c8.firebaseapp.com',
  projectId: 'nuxt-dashboard-7c6c8',
  storageBucket: 'nuxt-dashboard-7c6c8.appspot.com',
  messagingSenderId: '286362493875',
  appId: '1:286362493875:web:f6051b99585d2b9e7121c6'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export default function ({ isDev }, inject) {
  if (isDev) {
    connectFirestoreEmulator(db, 'localhost', 8080)
    connectAuthEmulator(auth, 'http://localhost:9099')
  }

  inject('user', () => null)
  inject('app', () => app)
  inject('auth', () => auth)
  inject('db', () => db)
}
