import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL:'https://job-portal-server-five-rho.vercel.app/',
    withCredentials:true
})

const useSecureAxios = () => {
    const {signOutUser} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response => {
            return response
        } , error => {
            console.log('error caught in interceptor',error)

            if(error.status === 401 || error.status ===403){
                console.log('need to logout the user')
                signOutUser()
                .then(()=> {
                    console.log('Log out happened')
                    navigate('/signIn')
                })
                .catch(error => {
                    console.error(error.message)
                })
            }
            return Promise.reject(error)
        })
    },[])

    return axiosInstance;
        
   
};

export default useSecureAxios;