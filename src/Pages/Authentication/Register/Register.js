import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Register = () => {
  return (
    <Container>
      <h1>Hurry up and create an account with BIKE DECOR</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms & conditions" />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
      <p className="toggleSection">
        Already have an account?
        <span> Log In now</span>
      </p>
    </Container>
  );
};

export default Register;
