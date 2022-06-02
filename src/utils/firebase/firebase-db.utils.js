import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore'
import { auth } from './firebase-singin.utils'

export const db = getFirestore()

export const createUserOnGoogleSignin = async (user, additional_info = {}) => {
  const userDocRef = doc(db, 'users', user.email)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email, uid, photoURL } = user
    const createAt = Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        uid,
        photoURL,
        ...additional_info,
      })
    } catch (error) {
      console.log('Error is occurred while creating the user: ', error.message)
    }
  }

  return userDocRef
}
