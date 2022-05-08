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

const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, authError] = useAuthState(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);

  const handleVerifyEmail = async () => {
    await sendEmailVerification();
    alert('Email verification message sent');
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

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (
    user?.providerData[0]?.providerId === 'password' &&
    !user?.emailVerified
  ) {
    return (
      <Container>
        {loading || sending ? (
          <Loading />
        ) : (
          <>
            <h3 className="text-danger">Your email is not verified</h3>
            <h5 className="text-success">Please verify your email address </h5>
            <Button onClick={handleVerifyEmail}>Send Verification</Button>
          </>
        )}
      </Container>
    );
  }

  return children;
};

export default RequiredAuth;
