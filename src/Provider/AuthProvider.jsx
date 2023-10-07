/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContex = createContext(null)

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {

    // const [user, setUser] = useState({});
    // const [loading, setLoading] = useState(true)
    


    /* google login */
    const googleLogin = (email, password) => {
        setLoading(user)
        return signInWithPopup(auth, googleProvider)
    }

    const user = 'kodom ali'

    /* Sign Up user*/
    /* const createuser = (email, password) => {
        setLoading(user)
        return createUserWithEmailAndPassword(auth, email, password)
    } */

    /* sign in user*/
    /* const signin = (email, password) => {
        setLoading(user)
        return signInWithEmailAndPassword(auth, email, password)
    }
 */
   /*  const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    } */

    /* Log out */
    /* const logout = () => {
        return signOut(auth)
    } */


    /* Currrent user / using observer */
    /* useEffect(() => {
        onAuthStateChanged(auth, (user) => {
           setUser(user)
           setLoading(false)
        });
    }, []) */



    const authentications = {
        googleLogin,
        user
       
        

    }

    return (
        <AuthContex.Provider value={authentications}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;