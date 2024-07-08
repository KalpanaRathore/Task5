import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      await axios.post('/api/forgot-password', { email });
      setMessage('Password reset link sent to your email');
    } catch (error) {
      console.error(error);
      setMessage('Error sending reset link');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      <button onClick={handleForgotPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
