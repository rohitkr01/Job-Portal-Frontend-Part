import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserAccount.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function UserAccount() {
  const [userAccount, setUserAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [address, setAddress] = useState('');

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

  useEffect(() => {
    fetchUserAccount();
  }, []);

  const fetchUserAccount = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/aarav@gmail.com'); // Replace with your API endpoint
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

  const updateDetails = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8080/users/update-user/aarav@gmail.com', {
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
      setSuccessMessage('Account updated !');
    } catch (error) {
      console.error('Failed to update user account:', error);
      setErrorMessage('An error occured !');
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <LoadingScreen />
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
          <button type="submit" className="user-update-btn"  onClick={handleButtonClick} >Update</button>
          {/* Display success mess  age if it exists */}
          {showParagraph && successMessage && <p>{successMessage}</p> }
          {showParagraph && errorMessage && <p>{errorMessage}</p> }

          </form>
      ) : (
        <div>No user account found.</div>
      )}
    </div>
  );
}

export default UserAccount;
