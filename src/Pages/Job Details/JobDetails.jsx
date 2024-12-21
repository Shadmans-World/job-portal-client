import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {_id, title, company, deadline } = useLoaderData();

  return (
    <div className="max-w-lg mx-auto my-20 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-semibold text-blue-600 mb-4">
        Job Details: {title}
      </h2>
      <p className="text-xl text-gray-700 mb-2">
        <strong>Company:</strong> {company}
      </p>
      <p className="text-xl text-gray-700 mb-4">
        <strong>Application Deadline:</strong> {deadline}
      </p>
      <Link to={`/job-apply/${_id}`}>
        <button className="btn btn-primary bg-blue-600 text-white py-2 px-6 rounded-md text-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Apply Now!
        </button>
      </Link>
    </div>
  );
};

export default JobDetails;
