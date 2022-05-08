import React, { useEffect, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../../customHooks/useToken/useToken';
import Loading from '../../Shared/Loading/Loading';

const LogIn = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogInSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
  };

  const handleResetEmail = async () => {
    const email = emailRef?.current?.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast.success('Reset email message is sent');
      return;
    } else {
      toast.error('Invalid mail');
      return;
    }
  };

  useEffect(() => {
    if (error) {
      toast.error('Invalid email or password');
    }
    return;
  }, [error]);

  return (
    <Container>
      {loading || sending ? (
        <Loading />
      ) : (
        <>
          <h1> Log in here to join BIKE DECOR</h1>
          <div>
            <Form onSubmit={handleLogInSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <Button type="submit">Log in</Button>
            </Form>
            <p>
              New here?
              <span onClick={() => navigate('/register')}> Register now</span>
            </p>
            <p>
              Forget Password?
              <span onClick={handleResetEmail}> Reset Password</span>
            </p>
            <SocialLogIn />
          </div>
        </>
      )}
    </Container>
  );
};

export default LogIn;
