import React from 'react';
import googleLogo from '../../../Images/google.png';
import githubLogo from '../../../Images/github.png';
import { Button } from 'react-bootstrap';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';
  let errorElement = '';

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  if (googleUser || githubUser) {
    navigate(from, { replace: true });
  }

  if (googleLoading || githubLoading) {
    return <p>Loading...</p>;
  }

  if (googleError || githubError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {googleError?.message} {githubError?.message}
        </p>
      </div>
    );
  }

  const handleGoogleLogIn = async () => {
    await signInWithGoogle();
  };
  const handleGithubLogIn = async () => {
    await signInWithGithub();
  };
  return (
    <>
      {errorElement}
      <div className="d-flex align-items-center justify-content-center">
        <div></div>
        <p className="m-4">or</p>
        <div></div>
      </div>
      <div className="d-flex">
        <Button onClick={handleGoogleLogIn}>
          <span className="text-white">Log In with </span>
          <img src={googleLogo} alt="google's logo" />
        </Button>
        <Button onClick={handleGithubLogIn}>
          <span>Log In with </span> <img src={githubLogo} alt="github's logo" />
        </Button>
      </div>
    </>
  );
};

export default SocialLogIn;
