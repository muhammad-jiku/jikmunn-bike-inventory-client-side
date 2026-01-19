import { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../customHooks/useToken';
import auth from '../../firebase.init';
import googleLogo from '../../Images/google.png';
import styles from './styles/authentication.module.css';

const SocialLogIn = () => {
  // eslint-disable-next-line no-unused-vars
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [token] = useToken(googleUser);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const handleGoogleLogIn = async () => {
    await signInWithGoogle();
  };

  useEffect(() => {
    if (googleError) {
      toast.error('Google sign in failed');
    }
    return;
  }, [googleError]);

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <>
        <div className='d-flex align-items-center justify-content-center'>
          <div className={styles.lineDraw}></div>
          <p className='m-4'>or</p>
          <div className={styles.lineDraw}></div>
        </div>
        <div className='d-flex'>
          <button onClick={handleGoogleLogIn} className={styles.socialButton}>
            <span>Sign in with </span>
            <img src={googleLogo} alt="google's logo" />
          </button>
        </div>
      </>
    </>
  );
};

export default SocialLogIn;
