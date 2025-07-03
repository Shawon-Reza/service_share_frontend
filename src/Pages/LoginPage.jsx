import React from 'react'
import Navbar from '../Components/Navbar'
import LoginPCLottie from '../assets/LoginPCLottie.json'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'

const LoginPage = () => {
    return (
        <motion.div
            className='min-h-screen p-5 my-auto'
            initial={{ opacity: 0, y: 100 }}         // ✅ Start off-screen
            animate={{ opacity: 1, y: 0 }}           // ✅ Animate into view
            transition={{ duration: 0.6, ease: 'easeOut' }} // ✅ Smooth transition
        >
            {/* <Navbar></Navbar> */}
            <div className='flex flex-col-reverse sm:flex-row h-full'>
                <div className='sm:w-1/2 flex  justify-center items-center'>
                    <form className='flex flex-col w-full px-10'>
                        <label htmlFor="email" className='mb-1 mt-3 text-sm font-medium text-gray-700'>
                            Email
                        </label>
                        <input
                            type="email"
                            name="" id="email"
                            className='border xl:h-8 2xl:h-14 rounded-lg'
                            placeholder='  Enter Your Email'
                        />
                        <label htmlFor="password" className='mb-1 mt-3 text-sm font-medium text-gray-700'>
                            Password
                        </label>
                        <input
                            type="password"
                            name="" id="password"
                            className='border xl:h-8 2xl:h-14 rounded-lg mt-3'
                            placeholder='  Enter Your Password'
                        />
                        <button
                            type="submit"
                            className='btn mt-10  btn-soft btn-success cursor-pointer'>Login</button>
                    </form>
                </div>

                <div className='sm:w-1/2'>

                    <Lottie animationData={LoginPCLottie} loop={true}></Lottie>
                </div>
            </div>
        </motion.div>
    )
}

export default LoginPage