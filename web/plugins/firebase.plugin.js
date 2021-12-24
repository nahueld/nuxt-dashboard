import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

export default function ({ isDev, $config }, inject) {
  const firebaseConfig = $config.firebase

  const app = initializeApp(firebaseConfig)
  const db = getFirestore()
  const auth = getAuth()
  if (isDev) {
    connectFirestoreEmulator(db, 'localhost', 8080)
    connectAuthEmulator(auth, 'http://localhost:9099')
  }

  inject('user', () => null)
  inject('app', () => app)
  inject('auth', () => auth)
  inject('db', () => db)
}
