import SignUpForm from '../../components/sign-up-form.component/sign-up-form.component'
import { createUserOnGoogleSignin } from '../../utils/firebase/firebase-db.utils'
import { signInWithGooglePopup } from '../../utils/firebase/firebase-singin.utils'

const SignIn = () => {
  const logGoogleSignin = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserOnGoogleSignin(user)
    console.log(userDocRef)
  }

  return (
    <div>
      <button onClick={logGoogleSignin}>Sign in with Google Popup</button>
      <SignUpForm></SignUpForm>
    </div>
  )
}

export default SignIn
