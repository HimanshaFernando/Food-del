import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = () => {
  const [currState, setCurrState] = useState('Sign Up');
  const [isVisible, setIsVisible] = useState(true); // Control visibility of popup

  // Function to handle popup close
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Don't render if the popup is not visible
  }

  return (
    <div className="login-popup">
      <div className="login-popup-overlay" onClick={handleClose}></div>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={handleClose}
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Sign Up' && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit" className="submit-btn">
          {currState === 'Sign Up' ? 'Create account' : 'Login'}
        </button>
        {currState === 'Sign Up' && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              By continuing, I agree to the{' '}
              <span className="terms-link">terms of use</span> &{' '}
              <span className="terms-link">privacy policy</span>.
            </p>
          </div>
        )}
        <p className="switch-state">
          {currState === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setCurrState('Login')}
                className="switch-link"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{' '}
              <span
                onClick={() => setCurrState('Sign Up')}
                className="switch-link"
              >
                Click here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
