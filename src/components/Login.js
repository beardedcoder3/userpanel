import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      setUser(userCredential.user);
      navigate('/');
    } catch (error) {
      toast.error(<div><i className="fas fa-exclamation-circle"></i> {error.message}</div>);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h1>Login</h1>
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
        <button type="submit" className="auth-button">Login</button>
        <div className="auth-link">
          <p>Not registered? <a href="/signup">Sign up now</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
