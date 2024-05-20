import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Sign in to your account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required placeholder='username' />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required  placeholder='password'/>
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
      <div className="image-container">
      <img src="/login.jpeg" alt="Login Illustration" />
      </div>
    </div>
  );
};

export default Login;
