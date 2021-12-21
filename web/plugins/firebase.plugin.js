// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

export default function (context, inject) {
  inject('app', () => app)
}
