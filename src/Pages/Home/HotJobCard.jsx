import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <div className="flex gap-2 m-2 items-center">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex gap-2 items-center">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
            {
                requirements.map((skill,idx) => <p key={idx} className="badge badge-accent">{skill}</p>)
            }
        </div>
        <div className="card-actions justify-end items-center mt-4">

            <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <Link to={`/jobs/${job._id}`}><button className="btn btn-primary hover:btn-success">Apply</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
