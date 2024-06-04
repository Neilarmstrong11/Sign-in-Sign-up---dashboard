import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <>
          {isSignUp ? (
            <SignUp toggleSignUp={toggleSignUp} />
          ) : (
            <Login onLogin={handleLogin} toggleSignUp={toggleSignUp} />
          )}
        </>
      ) : (
        <>
          <Dashboard />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;
