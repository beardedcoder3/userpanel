import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import { auth, db } from '../../firebase'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Assuming you have set up Firebase authentication and Firestore

const UserProfile = () => {
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    address: '',
    city: '',
    phoneNumber: '',
    zipCode: '',
    industry: ''
  });

  const industries = [
    'Technology',
    'Finance',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Retail'
  ];

  useEffect(() => {
    // Fetch user data from Firestore when the component mounts
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await db.collection('userinfo').doc(user.uid).get();
          const userData = userDoc.data();
          setFormData(userData);
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
  
    if (user) {
      try {
        await db.collection('userinfo').doc(user.uid).update(formData);
        toast.success('Settings saved successfully'); // Display toast message
        console.log('User data updated successfully');
      } catch (error) {
        console.error('Error updating user data:', error.message);
      }
    }
  };
  

  return (
    <div className="user-profile-container">
      <h2>Update User Profile</h2>
      <form onSubmit={handleSubmit} className="user-profile-form">
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber || ''}
            onChange={handleChange}
            placeholder="Please enter country code with your mobile number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="industry">Industry</label>
          <select
            id="industry"
            name="industry"
            value={formData.industry || ''}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select your industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
