import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth } from './firebase';

function LoginPage() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = (event) => {
    event.preventDefault();
  
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        navigate('/');
      })
      .catch((e) => alert(e.message));
  };
  
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        navigate('/');
      })
      .catch((e) => alert(e.message));
  };
  

 

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" />
          <button onClick={login} type="submit" className="login_signinbutton">
            Sign In
          </button>
          <p>
            By Signing-in you agree to Amazon's Conditions of Use and Sales. Please see our Privacy Notice, our Cookies
            Notice, and our Interest-Based Ads Notice.
          </p>
          <button onClick={register} className="login_registerbutton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
