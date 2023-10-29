import React , { useEffect, useState }   from 'react';
import axios from 'axios';
import { FaMapMarkerAlt,FaBriefcase, FaRupeeSign } from 'react-icons/fa';

// import Loading from '../LoadingScreen/Loading';
import LoadingAnimation from '../LoadingScreen/LoadingAnimation';
import './Styles/JobList.css';
// import axios from 'axios';

const JobList = () => { 

    const [jobList, setJobList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //To display successfull message
    const [appliedJobs, setAppliedJobs] = useState([]);


    


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
        return <div className="loading"><LoadingAnimation /></div>;
    }
    
    if (error) {
        return <div className="error">{error}</div>;
    }
    
// **********************************
    // Apply for job
// **********************************


const applyForJob = async (userId, jobId) => {
    try {
      await axios.post(`http://localhost:8080/jobs/apply?userId=${userId}&jobId=${jobId}`);
      
      const appliedJob = jobList.find(job => job.id === jobId);
      setAppliedJobs(prevAppliedJobs => [...prevAppliedJobs, appliedJob]);

      console.log('Job applied successfully');
      // You can add additional logic or display a success message after the API call
    } catch (error) {
      console.error('Failed to apply for the job', error);
      // Handle any errors that occur during the API call
      
    }
};

const userId = 4; 

// ********** end of Apply for job **********


    return (
        // <div className="job">
        //     <h2>Racent Job  </h2>
        //     <div className="all-jobs">
        //         <JobTemplate jobList={jobList} />
        //     </div> 
        // </div>

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
                        
                        
                        <button
                        type='submit'
                        onClick={() => applyForJob(userId, job.id)}
                        style={{
                            backgroundColor: appliedJobs.includes(job) ? 'green' : 'blue',
                        }}
                        >
                        {appliedJobs.includes(job) ? 'Applied' : 'Apply now'}
                        </button>
                       
                    </div>

                </li>
              ))}
                
            </ul>
        </div>
       
    </div>
    );
}
 
export default JobList;