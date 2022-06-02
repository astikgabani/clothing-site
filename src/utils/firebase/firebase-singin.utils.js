import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCx6wOIicgme1E2TQoNSGItSMT1SWAmTRY',
  authDomain: 'react-clothing-site.firebaseapp.com',
  projectId: 'react-clothing-site',
  storageBucket: 'react-clothing-site.appspot.com',
  messagingSenderId: '1096075241546',
  appId: '1:1096075241546:web:5edef5835608182c801eb3',
}

const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}
