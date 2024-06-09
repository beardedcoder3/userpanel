import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'; // Ensure you have set up Firestore in your firebase.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserInfo.css';

const UserInfo = () => {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [industry, setIndustry] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (user) {
      try {
        await db.collection('users').doc(user.uid).set({
          surname,
          name,
          address,
          city,
          phoneNumber,
          zipCode,
          industry,
        });
        navigate('/');
      } catch (error) {
        toast.error(<div><i className="fas fa-exclamation-circle"></i> {error.message}</div>);
      }
    }
  };

  return (
    <div className="userinfo-container">
      <form className="userinfo-form" onSubmit={handleSubmit}>
        <h1>Complete Your Profile</h1>
        <div className="form-group">
          <label>Surname</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number (Please enter country code)</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Industry</label>
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="userinfo-button">Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;
