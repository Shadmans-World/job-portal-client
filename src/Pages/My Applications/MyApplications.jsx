import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import useSecureAxios from "../../Hooks/useSecureAxios";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useSecureAxios();
  // Fetch job applications
  useEffect(() => {
    // axios
    //   .get(`https://job-portal-server-five-rho.vercel.app/job-application?email=${user.email}`,{withCredentials:true})
    //   .then((res) => setJobs(res.data))
    //   .catch((error) => console.error(`Error: ${error.message}`));

    axiosSecure
      .get(`job-application?email=${user.email}`)
      .then((res) => setJobs(res.data))
      .catch((error) => console.error(`Error: ${error.message}`));
  }, [user.email]);

  // Delete a job application
  const handleDeleteJobs = (job_id) => {
    axios
      .delete(
        `https://job-portal-server-five-rho.vercel.app/job-application/${job_id}?email=${user.email}`
      )
      .then((res) => {
        if (res.status === 200) {
          // Filter out the deleted job
          const updatedJobs = jobs.filter((job) => job._id !== job_id);
          setJobs(updatedJobs);
        }
      })
      .catch((error) => console.error(`Error: ${error.message}`));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
            <th></th>
          </tr>
        </thead>

        {/* Table body */}
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={job.company_logo} alt="Company Logo" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job.title}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  {job.category || "N/A"}
                </span>
              </td>
              <td>{job.company}</td>
              <th>
                <button
                  onClick={() => handleDeleteJobs(job._id)}
                  className="btn btn-xs hover:btn-primary"
                >
                  x
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplications;
