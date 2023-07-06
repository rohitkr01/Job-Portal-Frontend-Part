import React, { useState, useEffect } from 'react';
import './UserAccount.css';

import LoadingScreen from '../LoadingScreen/LoadingScreen';

function UserAccount() {
    const [userAccount, setUserAccount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        fetchUserAccount();
    }, []);

    const fetchUserAccount = async () => {
        try {
            const response = await fetch('http://localhost:8080/users/amit123@gmail.com'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch user account');
            }
            const data = await response.json();
            setUserAccount(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user account:', error);
            setError(error.message);
            setLoading(false);
        }
    };

  

    if (loading) {
      return <div className="loading"> <LoadingScreen /></div>;
  }

    if (error) {
        return <div className="error">{error}</div>;
    }


    const userDetailsItems =[ 
        {
            text: "Name",
            value: userAccount.name,
            htmlFor: "name",
            id:"name",

        },
        {
            text: "Email",
            value: userAccount.username,
            htmlFor: "email",
            id:"email",
        },
        {
            text : "Username",
            value: userAccount.username,
            htmlFor: "username",
            id:"username",
        },
        {   text:"Mobile Number",
            value : userAccount.mobile_number,
            htmlFor: "mobile_no",
            id:"mobile_no",
        },
        {   text:"WhatsApp Number",
            value : userAccount.whatsapp_number,
            htmlFor: "whatsapp_no",
            id:"whatsapp_no",
        },
        {   text:"Address",
            value : userAccount.address,
            htmlFor: "address",
            id:"address",
        },

        // Add more form fields for other user account details
    ];

  return (
    <div className="user-account-container">
      <h1>User Account Details</h1>
      {userAccount ? (
        <form>
        {userDetailsItems.map(( val ,key ) => (
            <div className="form-group" key={key}>
             
              <div>
              <label htmlFor={val.htmlFor}>{val.text}:</label>
                <input 
                        type="text" 
                        id={val.id} 
                        name={val.name}
                        value={val.value} 
                        readOnly 
                /> 
              </div> 
            </div> 
        ))}
        
        
        <button type='submit' className='user-update-btn'>Update</button>
        </form>
        
      ) : (
        <div>No user account found.</div>
      )}
    </div>
  );
}

export default UserAccount;