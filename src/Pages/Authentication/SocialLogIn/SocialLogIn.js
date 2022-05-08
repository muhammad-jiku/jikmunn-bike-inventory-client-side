import React, { useEffect } from 'react';
import googleLogo from '../../../Images/google.png';
import githubLogo from '../../../Images/github.png';
import { Button } from 'react-bootstrap';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../customHooks/useToken/useToken';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const SocialLogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [token] = useToken(googleUser || githubUser);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  if (token) {
    navigate(from, { replace: true });
  }

  const handleGoogleLogIn = async () => {
    await signInWithGoogle();
  };
  const handleGithubLogIn = async () => {
    await signInWithGithub();
  };

  useEffect(() => {
    if (googleError) {
      toast.error('Google sign in failed');
    }
    return;
  }, [googleError]);

  useEffect(() => {
    if (githubError) {
      toast.error('Github sign in failed');
    }
    return;
  }, [githubError]);

  return (
    <>
      {googleLoading || githubLoading ? (
        <Loading />
      ) : (
        <>
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
              <span>Log In with </span>{' '}
              <img src={githubLogo} alt="github's logo" />
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default SocialLogIn;
