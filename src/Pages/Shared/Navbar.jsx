import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context Provider/AuthProvider";
import navLogo from '/job-portal.png'
const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext)
  const handleLogOut = () => {
    signOutUser()
    .then(console.log(`LogOut SuccessFull`))
    .catch(error=> {
      console.log(`Logout failed . Error : ${error.message}`)
    })
  }
  const links = (
    <>
      <Link className="mr-2" to='/'>Home</Link>
      <Link className="mr-2" to='/myApplications'>My Applications</Link>
      <Link className="mr-2" to='/addJob'>Add a job</Link>
      <Link className="mr-2" to='/myPostedJob'>My Posted Jobs</Link>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <img className="w-16" src={navLogo} alt="logo" />
        <a className="btn btn-ghost text-4xl font-bold">Job Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          !user? (
            <div className="flex gap-4">
              <Link to='/register' className="btn">Register</Link>
              <Link to='/signIn' className="btn">Sign in</Link>
            </div>
          ):
          (
            <button className="btn" onClick={handleLogOut}>LogOut</button>
          )
        }
        
      </div>
    </div>
  );
};

export default Navbar;
