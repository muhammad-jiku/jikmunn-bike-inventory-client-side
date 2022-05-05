import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {
  useAuthState,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button } from 'react-bootstrap';

const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, authError] = useAuthState(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (sending) {
    return <p>Sending...</p>;
  }

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
      <div>
        <h3 className="text-danger">Your email is not verified</h3>
        <h5 className="text-success">Please verify your email address </h5>
        <Button onClick={handleVerifyEmail}>Send Verification</Button>
      </div>
    );
  }

  return children;
};

export default RequiredAuth;
