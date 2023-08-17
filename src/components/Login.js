import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';
// import img1 from '../images/job_img.png';

import axios from 'axios';



const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //To display successfull message
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8080/users/login', { username, password });
        console.log(response.data); // Handle the response as needed
        setSuccessMessage('Login successful!');
      } catch (error) {
        console.error(error); // Handle the error
        setErrorMessage('An error occurred!');
      }
    };


    


  return (
    
    <div className='login'>
      <div className="login-container">
        <div className="login-left-container">
            <h2>Welcome Bak to Aarav</h2>
            <div className="l-circle"></div>
            <div className="left">
              <h3>Smartz helps you land the Job that you deserve</h3>

              <p>Optimize your resume to stand out from the competition</p>

              <p>Follow you passion with us.....</p>
            </div>
        </div>

        <div className="login-content-container">
          <h2>Login</h2>
          <Link>Log in with Google</Link>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username or Email *</label> <br />
            <input type="email" id='username' name='username' placeholder='Username or Email' value={username} onChange={(e) => setUsername(e.target.value)} required />
            <br />
            <label htmlFor="password">Password *</label>  <br />
            <input type="password" id='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <br />
            <button type="submit" id='login-btn'>Login</button>
            {/* Display success message if it exists */}
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </form>
         <p>Don't have an account, <Link to="/signup">Sign up</Link></p>
         <p><Link to="/">Cancel</Link></p>
        </div>

      </div>
      
    </div>
  )
}

export default Login;