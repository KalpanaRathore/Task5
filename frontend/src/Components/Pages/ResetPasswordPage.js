import React, { useState } from 'react';
import axios from 'axios';

const ResetPasswordPage = ({ match }) => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const { token } = match.params;
      await axios.post('/api/reset-password', { token, newPassword });
      setMessage('Password reset successfully');
    } catch (error) {
      console.error(error);
      setMessage('Error resetting password');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password" />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPasswordPage;
