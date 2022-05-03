import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let errorElement = '';

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message} </p>
      </div>
    );
  }

  const handleLogInSubmit = (e) => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  return (
    <Container>
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
          <span> Register now</span>
        </p>
        <p>
          Forget Password?
          <span> Reset Password</span>
        </p>
        {errorElement}
        <SocialLogIn />
      </div>
    </Container>
  );
};

export default LogIn;
