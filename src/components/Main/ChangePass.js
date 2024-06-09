import React, { useState } from 'react';
import './ChangePass.css';
import { auth } from '../../firebase'; // Import the auth object from your firebase file

const ChangePass = ({ currentUser }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the old password matches the user's current password
    try {
      // Use your authentication system to reauthenticate the user with the old password
      const credential = await auth.signInWithEmailAndPassword(
        currentUser.email,
        oldPassword
      );

      // If reauthentication succeeds, update the password
      await auth.currentUser.updatePassword(newPassword);
      setMessage('Password changed successfully.');
    } catch (error) {
      setMessage('Failed to change password. Please check your old password.');
      console.error(error);
    }
  };

  return (
    <div className="change-pass-container">
      <form onSubmit={handleSubmit} className="change-pass-form">
        <div className="form-group">
          <label htmlFor="old-password">Old Password</label>
          <input
            type="password"
            id="old-password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {message && <p className="message">{message}</p>}
        <button type="submit" className="submit-button">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePass;
