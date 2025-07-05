import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {


    const [SignInUser, setSignInUser] = useState(null)

    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        return signOut(auth);
    };

    const SignInWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('Auth State Change', user)
                setSignInUser(user)
            }
            else {
                console.log("No User Sign In")
            }
        })

        return () => unsubscribe();
    }, [])





    const info = {
        createUserWithEmail,
        SignInUser,
        logOut,
        SignInWithEmailPass,
        setSignInUser
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider