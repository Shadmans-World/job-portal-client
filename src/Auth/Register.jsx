import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerAnimation from '../assets/Lottie/Register.json'
import { AuthContext } from "../Context Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import SocialButton from "../Pages/Shared/SocialButton";

const Register = () => {
  const {createUser}  = useContext(AuthContext)
  const Navigate = useNavigate()
    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password}
        console.log(user)
        
        // password validation 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passwordRegex.test(password)){
          console.log("Password must contain at least 6 characters, including at least one uppercase and one lowercase letter.")
          return;
        }
        else{
          console.log("You are good to go with that password")
        }

        createUser(email, password)
        .then(result => {
          console.log('Registered user successfully')
          form.reset()
          Navigate('/')
        })
        .catch(error=> {
          const code = error.code;
          const message = error.message;
          
          console.log(`Error: ${message} & the code is ${code}`)
        })

    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerAnimation} loop={true}/>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl mt-10 mx-auto font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
              <div className="divider">OR</div>
              <SocialButton/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
