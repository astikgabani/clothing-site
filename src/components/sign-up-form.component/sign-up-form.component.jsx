import { useState } from 'react'
import { createUserOnGoogleSignin } from '../../utils/firebase/firebase-db.utils'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase-singin.utils'

const defaultFormFields = {
  displayName: '11',
  email: 'aa@a.a',
  password: '123',
  confirmPassword: '123',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("Password doesn't match")
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserOnGoogleSignin(user, { displayName })
      resetFields()
    } catch (error) {
      if (error.code == 'auth/email-already-in-use') {
        alert('Email is alredy used.')
      } else {
        console.log('User creation error: ', error)
      }
    }
  }

  const onchange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div>
      <p>Please Signup here.</p>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          required
          onChange={onchange}
          type="text"
          name="displayName"
          value={displayName}
        ></input>

        <label>Email</label>
        <input
          required
          onChange={onchange}
          type="email"
          name="email"
          value={email}
        ></input>

        <label>Password</label>
        <input
          required
          onChange={onchange}
          type="password"
          name="password"
          value={password}
        ></input>

        <label>Confirm Password</label>
        <input
          required
          onChange={onchange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
        ></input>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
