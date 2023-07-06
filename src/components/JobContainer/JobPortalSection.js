import React from 'react';
import './Styles/JobPortalSection.css';

import JobList from './JobList';

function JobPortalSection() {
  return (
    <div className ="JobPortalSection">
        <div className="jobPortal-header">
            <div className="JP-header-tittle">
                <p>Need help? Call our placement support team. Time: 11:00AM-06:00PM (Monday-Saturday)</p>
            </div>
            <div className="JP-header-call">
                <p>CALL-US: <span>+91-7766864331</span> </p>
            </div>
           
        </div>
        <div className="JP-All-Jobs">
                <JobList />
        </div>
    </div>
  )
}

export default JobPortalSection