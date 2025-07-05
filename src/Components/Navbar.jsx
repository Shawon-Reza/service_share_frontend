import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import { span } from 'framer-motion/client'

const Navbar = () => {
    const navigate = useNavigate()
    const { SignInUser, logOut,setSignInUser } = useContext(AuthContext)
    console.log("From Navbar", SignInUser)


    const handleSignOut = () => {
        logOut()
            .then(() => {
                // Optional: show a toast or redirect
                console.log('User signed out');
                 setSignInUser(null)
            })
            .catch(error => {
                console.error('Sign out error:', error);
            });
    }


    const menu = (
        <>
            <li>
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? 'btn btn-outline btn-primary' : ''}
                >Home</NavLink>
            </li>
            <li>
                <NavLink
                    to='services'
                    className={({ isActive }) => isActive ? 'btn btn-outline btn-primary' : ''}
                >Services</NavLink>
            </li>
            <li>
                <NavLink
                    to='dashboard'
                    className={({ isActive }) => isActive ? 'btn btn-outline btn-primary' : ''}
                >Dashboard</NavLink>
            </li>
            <li>
                {SignInUser ?
                    (
                        <span
                            onClick={handleSignOut}
                        >Sign Out</span>
                    )
                    :
                    (
                        <NavLink to={'/registration'}>
                            Sign In
                        </NavLink>
                    )
                }


                {/* <NavLink
                    to='/registration'
                    className={({ isActive }) => isActive ? 'btn btn-outline btn-primary' : ''}
                >{SignInUser ? 'Sign Out': "Sign Up"}</NavLink> */}
            </li>
        </>
    )

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" onClick={() => { navigate('/') }}>Service Share</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    )
}

export default Navbar