import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const LogIn = () => {
  return (
    <Container>
      <h1> Log in here to join BIKE DECOR</h1>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
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
        <SocialLogIn />
      </div>
    </Container>
  );
};

export default LogIn;
