import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserAccount.css';
import LoadingAnimation from '../../components/LoadingScreen/LoadingAnimation';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function UserAccount() {

  const [userAccount, setUserAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [address, setAddress] = useState('');

 

  // Retrieve the username from localStorage
  const storedUserData = localStorage.getItem("userData");
  const username = storedUserData ? JSON.parse(storedUserData).username : null;
  

  useEffect(() => {

  // Use the `username` prop to construct the dynamic URL
  const urltoget = `http://localhost:8080/users/${username}`;
  
  const fetchUserAccount = async () => {
    try {
      const response = await axios.get(urltoget); // Replace with your API endpoint
      setUserAccount(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setMobileNumber(response.data.mobileNumber);
      setWhatsappNumber(response.data.whatsappNumber);
      setAddress(response.data.address);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user account:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  fetchUserAccount();
  }, [username]);

  const urltoupdate = `http://localhost:8080/users/update-user/${username}`;

  const updateDetails = async (e) => {
    e.preventDefault();
    try {
      await axios.put(urltoupdate, {
        name,
        email,
        mobileNumber: mobileNumber,
        whatsappNumber: whatsappNumber,
        address,
      });
      setUserAccount({
        ...userAccount,
        name,
        email,
        mobileNumber: mobileNumber,
        whatsappNumber: whatsappNumber,
        address,
      });
      console.log('User account updated successfully');
      // setSuccessMessage('Account updated !');
      toast.success("Account updated successfully");
    } catch (error) {
      console.error('Failed to update user account:', error);
      // setErrorMessage('An error occured !');
      toast.error("Failed to update user details !")
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <LoadingAnimation />
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="user-account-container">
      <h1>User Account Details</h1>
      {userAccount ? (
        <form onSubmit={updateDetails}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile_no">Mobile Number:</label>
            <input
              type="text"
              id="mobile_no"
              name="mobile_no"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="whatsapp_no">WhatsApp Number:</label>
            <input
              type="text"
              id="whatsapp_no"
              name="whatsapp_no"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <br />
          <button type="submit" className="user-update-btn" >Update</button>
         
          </form>
      ) : (
        <div>No user account found.</div>
      )}

      <ToastContainer/>
    </div>
  );
}

export default UserAccount;