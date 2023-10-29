import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';
// import img1 from '../images/job_img.png';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Navigate } from 'react-router-dom';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8080/users/login', { username, password });
        
        const userData = response.data;
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(userData); 
        localStorage.setItem("authenticated", true);
        setAuthenticated(true);

        // Use react-toastify to display a success message
        toast.success("Login successful!");
        <Navigate redirect to="/" />;
        
      } catch (error) {
        console.error(error); // Handle the error
        // Use react-toastify to display a success message
        setAuthenticated(false);
        toast.error("An error occurred!");
        
      }
    };


    


  return (
    <>
    {
      authenticated ?(
        <> 
        <Navigate redirect to='/' />
        </>
      ) :(
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
          </form>
  
           <p>Don't have an account, <Link to="/signup">Sign up</Link></p>
           <p><Link to="/">Cancel</Link></p>
          </div>
  
        </div>
  
        
        <ToastContainer />
      </div>
      ) 
    }
   </>
  )
}

export default Login;