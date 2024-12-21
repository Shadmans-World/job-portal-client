import React, { useContext } from "react";
import signin from "../assets/Lottie/Login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Context Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import SocialButton from "../Pages/Shared/SocialButton";
import axios from "axios";

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const Navigate = useNavigate()
    const location = useLocation()
    console.log('in signIn page', location)
    const from = location.state || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    // password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      console.log(
        "Password must contain at least 6 characters, including at least one uppercase and one lowercase letter."
      );
      return;
    } else {
      console.log("You are good to go with that password");
    }

    signInUser(email,password)
    .then(result => {
        console.log('Login Successfully',result.user.email)
        form.reset()
        // const user = {email: email}
        // axios.post(`https://job-portal-server-five-rho.vercel.app/jwt`,user,{withCredentials: true})
        // .then(res => {
        //   console.log(res.data)
        // })
        // .catch(error => {
        //   console.error(error.message)
        // })
        Navigate(from)
        
    })
    .catch(error => {
        const message = error.message;
        const code = error.code;
        console.log(`Error: ${message} & the code is ${code}`)
    })


  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={signin} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl mt-10 mx-auto font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="divider">OR</div>
              <SocialButton/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
