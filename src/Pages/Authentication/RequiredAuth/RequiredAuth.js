import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {
  useAuthState,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button, Container } from 'react-bootstrap';
import Loading from '../../Shared/Loading/Loading';

const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, authError] = useAuthState(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);

  if (authError || verifyError) {
    return (
      <div>
        <p>
          Error: {authError?.message} {verifyError?.message}
        </p>
      </div>
    );
  }

  const handleVerifyEmail = async () => {
    await sendEmailVerification();
    alert('Email verification message sent');
  };

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
