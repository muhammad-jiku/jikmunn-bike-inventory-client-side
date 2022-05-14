import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../customHooks/useToken/useToken';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const Register = () => {
  const [validated, setValidated] = useState(false);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const termsRef = useRef();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  // let need;

  if (token) {
    navigate(from, { replace: true });
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const terms = termsRef?.current?.checked;

    if (password?.length >= 1 && password?.length < 6) {
      toast.error('Password must be at least 6 letters');
      return;
    }
    if (terms && password?.length >= 6) {
      await createUserWithEmailAndPassword(email, password);
      toast.success('Account created successfully');
    }
    setValidated(true);
    console.log(name, email, password, terms);
  };

  useEffect(() => {
    if (error) {
      toast.error('Failed to create an account');
    }
    return;
  }, [error]);

  return (
    <div>
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <>
        <div className="formDesign">
          <div className="formDesignLeft">
            <h1 className="formDesignHeading">Sign Up</h1>
            <div>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleRegisterSubmit}
                className="form"
              >
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    ref={nameRef}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please insert your name
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    ref={emailRef}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please insert your email
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please insert your password
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Accept terms & conditions"
                    ref={termsRef}
                    feedback="You need to agree terms and conditions"
                    feedbackType="invalid"
                    required
                  />
                </Form.Group>
                <button type="submit" className="formDesignButton">
                  Sign up
                </button>
                <p className="toggleSection">
                  Already have an account?
                  <span onClick={() => navigate('/login')}> Sign in</span>
                </p>
              </Form>
              <SocialLogIn />
            </div>
          </div>

          <div className="formDesignRight">
            <div className="formDesignRightBox">
              <h1>Bike Decor</h1>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default Register;
