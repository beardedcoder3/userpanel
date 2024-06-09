import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css';

const SignUp = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [industry, setIndustry] = useState('');
  const navigate = useNavigate();

  const industries = [
    'Technology',
    'Finance',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Retail'
  ];

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error(<div><i className="fas fa-exclamation-circle"></i> Passwords do not match</div>);
      return;
    }
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      // Save user data to Firestore
      await db.collection('userinfo').doc(user.uid).set({
        email,
        name,
        surname,
        address,
        city,
        phoneNumber,
        countryCode,
        zipCode,
        industry,
        // Add more fields here if needed
      });

      setUser(user);
      navigate('/app'); // Navigate to the main application route after sign-up
    } catch (error) {
      toast.error(<div><i className="fas fa-exclamation-circle"></i> {error.message}</div>);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <label>Surname</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
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
          <label>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Country Code</label>
          <input
            type="text"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
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
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
          >
            <option value="">Select Industry</option>
            {industries.map((industry) => (
             
             <option key={industry} value={industry}>
             {industry}
           </option>
         ))}
       </select>
     </div>
     <button type="submit" className="auth-button">Sign Up</button>
     <div className="auth-link">
       <p>Already have an account? <a href="/login">Login</a></p>
     </div>
   </form>
 </div>
);
};

export default SignUp;