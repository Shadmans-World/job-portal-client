import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([])
    const {user} = useAuth()
    useEffect(()=> {
        axios.get(`https://job-portal-server-five-rho.vercel.app/jobs?email=${user.email}`)
        .then(res => {
            setJobs(res.data)
        })
        .catch(error => {
            console.error(`Error: ${error.message}`)
        })
    },[user.email])
    return (
        <div>
            <h2 className="text-3xl">My Posted Jobs: {jobs.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Job Field</th>
        <th>Application Count</th>
      </tr>
    </thead>
    <tbody>
     {
        jobs.map((job,idx) =>  <tr key={job._id}>
            <th>{idx + 1}</th>
            <td>{job.title}</td>
            <td>{job.field}</td>
            <td>{job.applicationCount}</td>
          </tr>)
     }

     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobs;