import axios from "axios";
import React, { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('https://job-portal-server-five-rho.vercel.app/jobs')
    .then(res => {
        setJobs(res.data)
    })
    .catch(error => {
        console.error(`Error is: ${error.message}`)
    })
  }, []);
  return <div className="my-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
        }
    </div>
  </div>;
};

export default HotJobs;
