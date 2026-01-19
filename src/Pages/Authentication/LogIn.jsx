import { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../customHooks/useToken';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogIn from './SocialLogIn';
import styles from './styles/authentication.module.css';

const LogIn = () => {
  const [validated, setValidated] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const handleLogInSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    await signInWithEmailAndPassword(email, password);
    setValidated(true);
  };

  const handleResetEmail = async () => {
    const email = emailRef?.current?.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast.success('Reset email message is sent');
      return;
    } else {
      toast.error('Insert your email address please!');
      return;
    }
  };

  useEffect(() => {
    if (error) {
      toast.error('Invalid email or password');
    }
    return;
  }, [error]);

  if (token) {
    navigate(from, { replace: true });
  }

  if (loading || sending) {
    return <Loading />;
  }

  return (
    <div>
      <div className={styles.formDesign}>
        <div className={styles.formDesignLeft}>
          <h1 className={styles.formDesignHeading}>Sign In</h1>
          <div>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleLogInSubmit}
              className={styles.form}
            >
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Email'
                  ref={emailRef}
                  required
                />
                <Form.Control.Feedback type='invalid'>
                  Please insert email
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  ref={passwordRef}
                  required
                />
                <Form.Control.Feedback type='invalid'>
                  Please insert password
                </Form.Control.Feedback>
              </Form.Group>
              <button type='submit' className={styles.formDesignButton}>
                Sign in
              </button>{' '}
              <p className={styles.toggleSection}>
                New to BIKE DECOR?
                <span onClick={() => navigate('/register')}> Sign up</span>
              </p>
              <p className={styles.toggleSection}>
                Forget Password?
                <span onClick={handleResetEmail}> Reset Password</span>
              </p>
            </Form>
            <SocialLogIn />
          </div>
        </div>

        <div className={styles.formDesignRight}>
          <div className={styles.formDesignRightBox}>
            <h1>Bike Decor</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
