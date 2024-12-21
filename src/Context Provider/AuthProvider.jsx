import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import auth from '../Firebase/firebase.config';
import axios from 'axios';
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)

    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    

    useEffect( ()=> {
        const unSubscribe = onAuthStateChanged(auth, currenUser =>  {
            setUser(currenUser);
            console.log('state captured', currenUser)
            if(currenUser){
                const user = {email: currenUser?.email}
                axios.post('https://job-portal-server-five-rho.vercel.app/jwt',user,{withCredentials:true})
                .then(res=> {
                    console.log('login token:', res.data)
                    setLoading(false)
                })
                .catch(error=> console.error(error.message))
            }
            else{
                axios.post('https://job-portal-server-five-rho.vercel.app/logout',{},{withCredentials:true})
                .then(res => {
                    console.log('Logout',res.data)
                    setLoading(false)
                })
                .catch(error=> console.error(error.message))
            }
            setLoading(false)
        })
        return ()=> {
            unSubscribe()
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        googleLogin
    }
    return (
        <AuthContext.Provider value= {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;