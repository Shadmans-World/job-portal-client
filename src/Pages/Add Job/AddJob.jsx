import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData)
        const {min, max, currency , ...newJob} = initialData;
        newJob.salaryRange = {min, max , currency}
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        // console.log(newJob)
        
        axios.post(`https://job-portal-server-five-rho.vercel.app/jobs`,newJob)
        .then(res => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "The job has been added",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/myPostedJob')
        })
        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            
          });
          console.error(error.message)
        })
    }
  return (
    <div>
      <form onSubmit={handleAddJob} className="card-body">
        {/* Job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job location"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select defaultValue={'Pick a job type'} className="select select-ghost w-full " name="type">
            <option disabled >
              Pick a job type
            </option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Intern</option>
          </select>
        </div>
         {/* Job Field */}
         <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select defaultValue={'Pick a job Field'} className="select select-ghost w-full " name="field">
            <option disabled >
              Pick a job Field
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>
        {/* Salary Range */}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Salary Range</span>
          </label>
          <input
            type="text"
            name="min"
            placeholder="Min"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          
          <input
            type="text"
            name="max"
            placeholder="Max"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          
          <select defaultValue={'Currency'} name="currency" className="select select-ghost w-full ">
            <option disabled>
             Currency
            </option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
            <option>EURO</option>
          </select>
        </div>
        </div>
        {/* Job description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job description</span>
          </label>
          
          <textarea className="textarea" name='description' placeholder="Job Description" required></textarea>
        </div>
         {/* Company Name */}
         <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea className="textarea" name='requirements' placeholder="Put each requirements in a new line" required></textarea>
        </div>
         {/* Responsibilities */}
         <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea className="textarea" name='responsibilities' placeholder="Write each responsibilities in a new line" required></textarea>
        </div>
        {/* Status */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input
            type="text"
            name="status"
            defaultValue={'active'}
            placeholder="Status"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR_Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR_Email</span>
          </label>
          <input
          defaultValue={user.email}
            type="email"
            name="hr_email"
            placeholder="Hr_Email"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR_Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR_Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="Hr_Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo"
            className="input input-bordered"
            required
          />
        </div>
        {/* Submit BTN */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
