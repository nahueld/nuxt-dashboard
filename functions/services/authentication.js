
const { createUserWithEmailAndPassword, signOut, onAuthStateChanged: originalOnAuthStateChanged, signInWithEmailAndPassword } = require('firebase/auth')

class AuthenticationService {
  service

  constructor (serviceProvider) {
    this.service = serviceProvider
  }

  signIn (email, password) {
    return signInWithEmailAndPassword(this.service, email, password)
  }

  createAccount (email, password) {
    return createUserWithEmailAndPassword(this.service, email, password)
  }

  onAuthStateChanged (callback) {
    return originalOnAuthStateChanged(this.service, callback)
  }

  signOut () {
    return signOut(this.service)
  }
}

module.exports = {
  AuthenticationService
}
