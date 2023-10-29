import{ React , useState } from 'react';
import '../style/Signup.css';
import { Link , Navigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling


const Signup = () => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //To display successfull message
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/users/signup', {name, username, password });
      console.log(response.data);
     
      // Use react-toastify to display a success message
      toast.success("Signup successful!", {
        position: toast.POSITION.TOP_CENTER,
      });

      setSuccessMessage('Signup successful!');
    } catch (error) {
      console.error(error); // Handle the error
      setErrorMessage('An Error Occurs Registered !');

      // Use react-toastify to display an error message
      toast.error("An error occurred during registration!", {
        position: toast.POSITION.TOP_CENTER,
      });

    }
  };

  return (
    <div className='signup'>
         
        <div className="signup-container">
            <div className="signup-content-container">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">First Name:</label>  <br />
                    <input type="text" id="name" name="name" placeholder="Enter Your Full Name" value={name} onChange={(e) => setName(e.target.value)}  required />
                    <br />
                    <label htmlFor="email">Email:</label>  <br />
                    <input type="email" id="email" name="email" placeholder="Enter email id" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <br />
                    <label htmlFor="pwd">Password:</label>  <br />
                    <input type="password" id="pwd" name="pwd" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <br />
                    {/* <label htmlFor="cnf-pwd">Password:</label>  <br />
                    <input type="password" id="cnf-pwd" name="cnf-pwd" placeholder="Confirm password" required />
                    <br /> */}
                    <button type="submit" id="signup-btn">Sign up</button> 
                    {/* Display success message if it exists */}
                    {successMessage && <p>{successMessage}</p> && <Navigate to="/"></Navigate>}
                    {errorMessage && <p>{errorMessage}</p>}
                </form>
                <p>Already have an account, <Link to="/login">Sign Here</Link></p>
                <p><Link to="/">Cancel</Link></p>
            </div>
            <div className="right-div">
              
            </div>
        </div>
    </div>
  )
}

export default Signup