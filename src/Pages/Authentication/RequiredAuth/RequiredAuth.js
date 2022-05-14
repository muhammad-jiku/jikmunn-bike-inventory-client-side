import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {
  useAuthState,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button, Container } from 'react-bootstrap';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import '../Authentication.css';

const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, authError] = useAuthState(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);

  const handleVerifyEmail = async () => {
    await sendEmailVerification();
    toast.success('Email verification message sent');
  };

  useEffect(() => {
    if (authError) {
      toast.error('Something went wrong');
    }
    return;
  }, [authError]);

  useEffect(() => {
    if (verifyError) {
      toast.error('Verification failed');
    }
    return;
  }, [verifyError]);
  if (loading) {
    return;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (
    user?.providerData[0]?.providerId === 'password' &&
    !user?.emailVerified
  ) {
    return (
      <Container className="requiredAuth">
        {/* {loading || sending ? (
          <Loading />
        ) : ( */}

        <h1>Your email is not verified</h1>
        <h2>Please verify your email address </h2>
        <button onClick={handleVerifyEmail}>Send Verification</button>

        {/* )} */}
      </Container>
    );
  }

  return children;
};

export default RequiredAuth;
