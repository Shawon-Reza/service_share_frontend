import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react';
import LoginPCLottie from '../assets/LoginPCLottie.json';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/Footer';

const Login = () => {
  const { SignInWithEmailPass } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSigninForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());

    setLoading(true);

    SignInWithEmailPass(formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`Welcome back, ${user.displayName || 'User'}!`);
        navigate('/'); // ✅ Redirect after login
      })
      .catch((error) => {
        console.error(error.message);
        if (error.code === 'auth/user-not-found') {
          toast.error('No account found with this email.');
        } else if (error.code === 'auth/wrong-password') {
          toast.error('Incorrect password. Please try again.');
        } else {
          toast.error('Failed to log in. Please try again later.');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.div
      className="flex flex-col lg:h-screen min-h-screen p-5 my-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex flex-col-reverse sm:flex-row min-h-0 flex-grow">
        {/* Form */}
        <div className="sm:w-1/2 flex justify-center items-center">
          <form className="flex flex-col w-full px-10" onSubmit={handleSigninForm}>
            <label htmlFor="email" className="mb-1 mt-3 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border xl:h-8 2xl:h-14 rounded-lg px-3"
              placeholder="Enter Your Email"
              required
            />

            <label htmlFor="password" className="mb-1 mt-3 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border xl:h-8 2xl:h-14 rounded-lg px-3"
              placeholder="Enter Your Password"
              required
            />

            <p className="mt-2">
              Don't have an account?{' '}
              <span className="text-blue-500 hover:underline">
                <Link to="/registration">Sign Up</Link>
              </span>
            </p>

            <button
              type="submit"
              className="btn mt-10 btn-success"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Animation */}
        <div className="sm:w-1/2 flex justify-center items-center">
          <Lottie animationData={LoginPCLottie} loop={true} />
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </motion.div>
  );
};

export default Login;
