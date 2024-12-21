import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const {user} = useAuth()
  const navigate = useNavigate();
    // console.log(id,user.email)
  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.LinkedIn.value;
    const github = form.Github.value;
    const resume = form.Resume.value;

    const data = { linkedIn, github, resume };
    // console.log(data);

    const jobApplication = {
        job_id : id,
        applicant_email: user.email,
        linkedIn,
        github,
        resume
    }

    axios.post(`https://job-portal-server-five-rho.vercel.app/job-application`,jobApplication, {withCredentials: true})
    .then(res => {
        // console.log(res.data)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your job has been applied",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/myApplications')
    })
    .catch(error=> {
        console.error(`Error: ${error.message}`)
    })
  };



  return (
    <div className="card bg-base-100 w-full  shadow-2xl">
      <h1 className="text-5xl font-bold text-center">
        Apply Job and Good Luck!
      </h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn</span>
          </label>
          <input
            type="url"
            placeholder="LinkedIn URL"
            name="LinkedIn"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github</span>
          </label>
          <input
            type="url"
            name="Github"
            placeholder="Github URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input
            type="url"
            name="Resume"
            placeholder="Resume URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
