import React , { useEffect, useState }   from 'react';
import { FaMapMarkerAlt,FaBriefcase, FaRupeeSign } from 'react-icons/fa';

import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './Styles/JobList.css';
// import axios from 'axios';

const AppliedJobs = () => { 

    const [jobList, setJobList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        fetchData();
    },[]);


    const fetchData = async () => {
       
        try {
          const response = await fetch('http://localhost:8080/jobs/all-jobs');
        //   if (!response.ok) {
        //     throw new Error('Failed to fetch user account');
        //   }
          const resData = await response.json();
          console.log(resData);
          setJobList(resData);
          setLoading(false);

        } catch (error) {
            console.error('Error fetching user account:', error);
            setError(error.message);
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading"><LoadingScreen /></div>;
    }
    
    if (error) {
        return <div className="error">{error}</div>;
    }
    


    return (
    
    <div className="JobList-contaioner">
        <h2>Job List</h2>
        <div className="jobList-inner-container">
            <ul>
              {jobList.map( (job) =>(
                <li key = {job.id}>
                    <h3>{job.companyName}</h3>
                    
                    {/* location */}
                    <div className="role_loc">
                        <p> <span>Job Role:</span><br />{ job.jobRole }</p>
                        <div id="loc">
                            <p><FaMapMarkerAlt /> {job.location}</p>
                        </div>
                    </div>

                    {/* skills */}
                    <div className="skills">
                        <h5>Preferred Skills(Good To Have): </h5>
                        <div className="all-skills">
                            {job.skills.map((skill) => (
                                <span key={skill} className="skill">{skill}</span>
                            ))}
                        </div>
                    </div>
                       
                    {/* vacancies & Salary */}
                    <div className="pos_sal">
                        <p> <FaBriefcase /> Open Positions: { job.vacancies }</p>
                        <p><FaRupeeSign /> { job.salary }</p>
                    </div>

                    {/* More Details & Apply */}
                    <div className="job_button">
                        <button type="submit" >More Details </button>
                    </div>

                </li>
              ))}
                
            </ul>
        </div>
       
    </div>
    );
}
 
export default AppliedJobs;