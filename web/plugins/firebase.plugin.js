import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
const { AuthenticationService } = require('../../functions/services/authentication')

export default function ({ isDev, $config }, inject) {
  const firebaseConfig = $config.firebase

  const app = initializeApp(firebaseConfig)
  const db = getFirestore()
  const auth = getAuth()
  if (isDev) {
    connectFirestoreEmulator(db, 'localhost', 8080)
    connectAuthEmulator(auth, 'http://localhost:9099')
  }

  const authenticationService = new AuthenticationService(auth)

  inject('user', () => null)
  inject('app', () => app)
  inject('auth', authenticationService)
  inject('db', () => db)
}
