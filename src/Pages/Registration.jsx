import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import LoginPCLottie from '../assets/LoginPCLottie.json'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'
import { AuthContext } from '../Context/AuthProvider'
import { toast } from 'react-toastify'
import { sendEmailVerification, updateProfile } from 'firebase/auth'
import { Link } from 'react-router-dom'

const Registration = () => {
  const { createUserWithEmail } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  const handleSignUpForm = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)
    const formData = Object.fromEntries(data.entries())

    if (formData.password !== formData.confirmPassword) {
      toast.warning('Oops! The passwords you entered don’t match.')
      return
    }

    setLoading(true)

    createUserWithEmail(formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)

        updateProfile(user, {
          displayName: formData.displayName,
        })
          .then(() => {
            toast.success(`Welcome, ${formData.displayName}!`)

            sendEmailVerification(user)
              .then(() => {
                toast.info('Verification email sent! Please check your inbox.')
              })
              .catch((error) => {
                console.error('Error sending verification email:', error)
              })
          })
          .catch((err) => {
            console.error('Error updating profile:', err)
            toast.error('Failed to update display name.')
          })
      })
      .catch((err) => {
        console.error('Fail to create user:', err.message)

        if (err.code === 'auth/email-already-in-use') {
          toast.error('This email is already registered. Please try logging in.')
        } else if (err.code === 'auth/invalid-email') {
          toast.error('The email address is not valid.')
        } else if (err.code === 'auth/weak-password') {
          toast.error('Password should be at least 6 characters.')
        } else {
          toast.error('Failed to create account. Please try again later.')
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <motion.div
      className='min-h-screen p-5 my-auto'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='flex flex-col-reverse sm:flex-row h-full'>
        <div className='sm:w-1/2 flex justify-center items-center'>
          <form className='flex flex-col w-full px-10' onSubmit={handleSignUpForm}>
            <label htmlFor="displayName" className='mb-1 mt-3 text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              type="text"
              name="displayName"
              id="displayName"
              className='border xl:h-8 2xl:h-14 rounded-lg px-3'
              placeholder='Enter Your Name'
              required
            />

            <label htmlFor="email" className='mb-1 mt-3 text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className='border xl:h-8 2xl:h-14 rounded-lg px-3'
              placeholder='Enter Your Email'
              required
            />

            <label htmlFor="password" className='mb-1 mt-3 text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className='border xl:h-8 2xl:h-14 rounded-lg px-3'
              placeholder='Enter Your Password'
              required
            />

            <label htmlFor="confirmPassword" className='mb-1 mt-3 text-sm font-medium text-gray-700'>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className='border xl:h-8 2xl:h-14 rounded-lg px-3'
              placeholder='Confirm Your Password'
              required
            />
            <p className='mt-2'>
              Already Signed Up?{' '}
              <span className="text-blue-500 hover:underline">
                <Link to="/login">Sign In</Link>
              </span>
            </p>


            <button
              type="submit"
              className={`btn mt-10 btn-soft btn-success `}
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
        </div>

        <div className='sm:w-1/2'>
          <Lottie animationData={LoginPCLottie} loop={true} />
        </div>
      </div>
    </motion.div>
  )
}

export default Registration
