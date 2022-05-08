import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useToken from '../../../customHooks/useToken/useToken';

const LogIn = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetEmailError] =
    useSendPasswordResetEmail(auth);

  const [token] = useToken(user);

  let errorElement = '';

  if (token) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (sending) {
    return <p>Sending...</p>;
  }

  if (emailError || resetEmailError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {emailError?.message} {resetEmailError?.message}
        </p>
      </div>
    );
  }

  const handleLogInSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
    // const { data } = await axios.post('https://cryptic-reef-07381.herokuapp.com/login', { email });
    // console.log(data);
    // localStorage.setItem('accessToken', data?.accessToken);
    // navigate(from, { replace: true });
  };

  const handleResetEmail = async () => {
    const email = emailRef?.current?.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    } else {
      toast('Please insert a correct email');
    }
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
          <span onClick={() => navigate('/register')}> Register now</span>
        </p>
        <p>
          Forget Password?
          <span onClick={handleResetEmail}> Reset Password</span>
        </p>
        {errorElement}
        <ToastContainer />
        <SocialLogIn />
      </div>
    </Container>
  );
};

export default LogIn;
