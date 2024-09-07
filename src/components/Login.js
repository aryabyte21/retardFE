import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://your-backend-api-url/login";
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Zerodha</button>
    </div>
  );
};

export default Login;
