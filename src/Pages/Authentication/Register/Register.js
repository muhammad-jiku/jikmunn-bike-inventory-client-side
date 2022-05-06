import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../customHooks/useToken/useToken';

const Register = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const termsRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let errorElement = '';

  const [token] = useToken(user);

  if (token) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    if (password?.length < 6) {
      alert('Password must be at least 6 letters');
      return;
    }

    const terms = termsRef?.current?.checked;
    if (terms) {
      await createUserWithEmailAndPassword(email, password);
      alert('Account created successfully');
    } else {
      alert('Please accept terms and conditions to create an account');
    }

    console.log(name, email, password);
  };
  return (
    <Container>
      <h1>Hurry up and create an account with BIKE DECOR</h1>
      <Form onSubmit={handleRegisterSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            ref={nameRef}
            required
          />
        </Form.Group>

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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Accept terms & conditions"
            ref={termsRef}
          />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
      <p>
        Already have an account?
        <span onClick={() => navigate('/login')}> Log In now</span>
      </p>
      {errorElement}
      <SocialLogIn />
    </Container>
  );
};

export default Register;
