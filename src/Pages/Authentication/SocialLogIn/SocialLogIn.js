import React from 'react';
import googleLogo from '../../../Images/google.png';
import githubLogo from '../../../Images/github.png';

const SocialLogIn = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div></div>
        <p className="m-4">or</p>
        <div></div>
      </div>
      <div className="d-flex">
        <button className="googleButton">
          <span className="text-white">Log In with </span>
          <img src={googleLogo} alt="google's logo" />
        </button>
        <button className="githubButton">
          <span>Log In with </span> <img src={githubLogo} alt="github's logo" />
        </button>
      </div>
    </>
  );
};

export default SocialLogIn;
