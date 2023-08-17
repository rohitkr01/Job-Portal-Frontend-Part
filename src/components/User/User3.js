import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './User3.css';

const User3 = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    whatsappNumber: '',
    address: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a 5-second delay before fetching data (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 5000));

      try {
        const response = await axios.get('http://localhost:8080/users/aarav@gmail.com'); // Replace '/api/user' with your backend API endpoint
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the updated user data to the backend (replace '/api/user' with your backend API endpoint)
      await axios.put('http://localhost:8080/users/update-user/aarav@gmail.com', userData);
      alert('Data updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('Error updating data. Please try again.');
    }
  };

  return (
    <div className='user-account-container'>
      <h2>User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            />
        </div>
        
        <div className="form-group">
            <label htmlFor="mobileNumber">Mobile:</label>
            <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={userData.mobileNumber}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="whatsappNumber">WhatsApp:</label>
            <input
            type="tel"
            id="whatsappNumber"
            name="whatsappNumber"
            value={userData.whatsappNumber}
            onChange={handleChange}
            
            />
        </div>
        <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
            id="address"
            name="address"
            value={userData.address}
            onChange={handleChange}
            rows="4"
            cols="30"
           
            ></textarea>
        </div>
        <br />
        <div className="fetch-btn-container">
            {loading ? (
            <p>Fetching user data. Please wait...</p>
            ) : (
            <input type="submit" className="user-update-btn"  value="Update" />
            )}
        </div>
      </form>
    </div>
  );
};

export default User3;
