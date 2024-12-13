import React from "react";
import "../Styles/Job.css"; // Ensure styles are imported
import paystack from "../images/paystack-blue.png";
import google from "../images/google_g.png";
import flutterwave from "../images/flutterwave.png";
import Access from "../images/Access.png";
const jobs = [
  {
    id: 1,
    companyLogo: paystack,
    jobTitle: "QA Engineer",
    companyName: "Paystack",
    location: "Lagos, Nigeria",
    jobType: "Full time",
  },
  {
    id: 2,
    companyLogo: google,
    jobTitle: "Product Analyst",
    companyName: "Google",
    location: "Lagos, Nigeria",
    jobType: "Part time",
  },
  {
    id: 3,
    companyLogo: flutterwave,
    jobTitle: "HR Manager",
    companyName: "Flutterwave",
    location: "Abuja, Nigeria",
    jobType: "Full time",
  },
  {
    id: 4,
    companyLogo: Access,
    jobTitle: "QA Engineer",
    companyName: "Access",
    location: "Lagos, Nigeria",
    jobType: "Full time",
  },
];

const Job = () => {
  return (
    <div className="job-container">
      <h2>Recommended Jobs</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-type">{job.jobType}</div>
            <div className="job-logo">
              <img src={job.companyLogo} alt={`${job.companyName} Logo`} />
            </div>
            <h3 className="job-title">{job.jobTitle}</h3>
            <div className="job-details">
              <span className="company-name">{job.companyName}</span>
              <div className="location-and-link">
                <span className="job-location">{job.location}</span>
                <span className="apply-now">Apply now</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
