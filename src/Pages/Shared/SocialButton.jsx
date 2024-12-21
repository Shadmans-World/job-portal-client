import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';

const SocialButton = () => {
    const {googleLogin} = useContext(AuthContext);
    const Navigate = useNavigate()
    const location = useLocation()
    const from = location.state || '/'
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log('User Login Successfully')
            Navigate(from)
        })
        .catch(error => {
            console.log(`Error: Message ${error.message} and code is ${error.code}`)
        })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn flex items-center w-full"><FcGoogle />Google</button>
        </div>
    );
};

export default SocialButton;