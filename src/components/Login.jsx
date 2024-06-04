import React, { useState } from 'react';

function Login({ onLogin, toggleSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add authentication logic to verify email and password
    console.log('Logging in with', email, password);
    onLogin(); // Call onLogin to update the state in App.jsx
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={toggleSignUp}>
        Don’t have an account? Sign Up
      </button>
    </div>
  );
}

export default Login;
