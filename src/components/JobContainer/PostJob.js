import React, { useState } from 'react';
import "./Styles/PostJob.css";
import axios from 'axios';




const JobPostingForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState([]);
  // const [selectedSkills, setSelectedSkills] = useState([]);
  const [availableSkills, setAvailableSkills] = useState([
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    // Add more skills as needed
  ]);
  const [vacancies, setVacancies] = useState(0);
  const [salary, setSalary] = useState('');

  //To display successfull message
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showParagraph, setShowParagraph] = useState(false);

  const handleButtonClick = () => {
    setShowParagraph(true);

    // Hide the paragraph after 5 seconds
    setTimeout(() => {
      setShowParagraph(false);
    }, 5000);
  };

  

  const handleSkillsChange = (e) => {
    const value = e.target.value;
    const updatedSelectedSkills = [...skills, value];
    const updatedAvailableSkills = availableSkills.filter((skill) => skill !== value);

    setSkills(updatedSelectedSkills);
    setAvailableSkills(updatedAvailableSkills);
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here, you can perform further actions such as sending the form data to an API
    try {
      const response = await axios.post('http://localhost:8080/jobs/post-job' , {companyName , jobRole, jobDescription, location, skills, vacancies, salary} );
      console.log(response.data); // Handle the response as needed
      setSuccessMessage('Job Posted successful!');
    } catch (error) {
      console.error(error); // Handle the error
      setErrorMessage('An error occurred!');
    }
    
    // Reset the form fields
    setCompanyName('');
    setJobRole('');
    setJobDescription('');
    setLocation('');
    // setSkills([]);
    setVacancies(0);
    setSalary('');

    // ****** Reset the form  *****
    setSkills([]);
    setAvailableSkills([
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js',
      'Python',
      // Add more skills as needed
    ]);
  };


  return (
    <div className="job-form-container">
      <div className="job-form-inner-container">
        <h2 className="form-title">Post a Job</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="form-col">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

          <div className="form-col">
            <label htmlFor="jobRole">Job Role</label>
            <select id="jobRole" value={jobRole} onChange={(e) => setJobRole(e.target.value)} required>
              <option value="" disabled>Select Job Role</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              {/* Add more job roles as needed */}
            </select>
          </div>
    
          <div className="form-col">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder='Write here...' required >
            </textarea>
          </div>

          <div className="form-col">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required />
          </div>
          
          <div className="form-col">
            <label htmlFor="skills">Skills</label>
            <select
              id="skills" name="skills" multiple value={skills} onChange={handleSkillsChange} required
            >
              <option disabled value="">Select multiple skills </option>
              <option value="DSA">DSA </option>
              {availableSkills.map((skill) => (
                <option key={skill} value={skill} >
                  {skill}
                </option>
              ))}
            </select>
            <div className="selected-skills">
            {/* <h3>Selected Skills:</h3> */}
              {skills.map((skill) => (
                <span key={skill} className="selected-skill">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="form-col">
            <label htmlFor="vacancies">Vacancies</label>
            <input
              type="number"
              id="vacancies"
              value={vacancies}
              onChange={(e) => setVacancies(e.target.value)}
              required />
          </div>
        
          <div className="form-col">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required />
          </div>
          <br />
          <div>
            <button type="submit" className="submit-btn" onClick={handleButtonClick}>Submit</button>

            {showParagraph && successMessage && <p>{successMessage}</p> }
            {showParagraph && errorMessage && <p>{errorMessage}</p> }

          </div>
          
        </form>
       
      </div>
    </div>
  );
};

export default JobPostingForm;
